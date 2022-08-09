import { PackageElement, PackageType } from "../aqua.ts";

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
    pkg.type === PackageType.GoInstall && pkg.path !== undefined
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

export function getDescriptions(pkg: PackageElement): string {
  return pkg.description ?? "";
}
