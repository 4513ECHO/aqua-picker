#!/usr/bin/env -S deno run --allow-net
import { parse } from "$std/encoding/yaml.ts";
import { ensureLike } from "https://deno.land/x/unknownutil@v2.0.0/mod.ts";
import type { Registry } from "@/types/aqua.d.ts";

const response = await fetch(
  "https://raw.githubusercontent.com/aquaproj/aqua-registry/main/registry.yaml",
);
if (response.ok) {
  const registry = ensureLike<Registry, unknown>(
    { packages: [] },
    parse(await response.text()),
  );
  console.log(JSON.stringify(registry.packages!));
} else {
  throw new Error(
    `failed to fetch standard registry: ${response.status} ${response.statusText}`,
  );
}
