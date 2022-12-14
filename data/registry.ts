import { parse } from "$std/encoding/yaml.ts";
import { ensureLike } from "https://deno.land/x/unknownutil@v2.1.0/mod.ts";
import type { Registry } from "@/types/aqua.d.ts";

const response = await fetch(
  "https://raw.githubusercontent.com/aquaproj/aqua-registry/main/registry.yaml",
);

const registry = response.ok
  ? ensureLike<Registry, unknown>(
    { packages: [] },
    parse(await response.text()),
  )
  : (() => {
    throw new Error(
      `failed to fetch standard registry: ${response.status} ${response.statusText}`,
    );
  })();

export const packages = registry.packages!;
