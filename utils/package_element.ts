import { FileElement, PackageElement } from "../types/aqua.d.ts";
import * as path from "https://deno.land/std@0.150.0/path/mod.ts";

export function hasRepo(
  pkg: PackageElement,
): pkg is PackageElement & { repo_owner: string; repo_name: string } {
  return pkg.repo_owner !== undefined && pkg.repo_name !== undefined &&
    pkg.repo_owner !== "" && pkg.repo_name !== "";
}

export function getName(pkg: PackageElement): string {
  if (pkg.name && pkg.name !== "") {
    return pkg.name;
  }
  if (hasRepo(pkg)) {
    return `${pkg.repo_owner}/${pkg.repo_name}`;
  }
  if (
    pkg.type === "go_install" && pkg.path !== undefined
  ) {
    return pkg.path;
  }
  return "";
}

export function getLink(pkg: PackageElement): string {
  if (pkg.link && pkg.link !== "") {
    return pkg.link;
  }
  if (hasRepo(pkg)) {
    return `https://github.com/${pkg.repo_owner}/${pkg.repo_name}`;
  }
  return "";
}

export function getPath(pkg: PackageElement): string {
  if (pkg.path) {
    return pkg.path;
  }
  if (pkg.type === "go_install" && hasRepo(pkg)) {
    return `github.com/${pkg.repo_owner}/${pkg.repo_name}`;
  }
  return "";
}

export function getFiles(pkg: PackageElement): FileElement[] {
  if (pkg.files && pkg.files.length > 0) {
    return pkg.files;
  }
  if (hasRepo(pkg)) {
    return [{ name: pkg.repo_name }];
  }
  if (pkg.type === "go_install") {
    if (pkg.asset) {
      return [{ name: pkg.asset }];
    }
    return [{ name: path.basename(getPath(pkg)) }];
  }
  return [];
}
