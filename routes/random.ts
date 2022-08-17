import type { Handlers } from "$fresh/server.ts";
import { sample } from "$std/collections/sample.ts";
import * as packageElement from "@/utils/package_element.ts";
import { packages } from "@/data/registry.ts";

export const handler: Handlers = {
  GET(req: Request): Response {
    const pkg = sample(packages.map(packageElement.getName)) ?? "";
    return Response.redirect(
      new URL(`/package/${pkg}`, new URL(req.url).origin),
      302,
    );
  },
};
