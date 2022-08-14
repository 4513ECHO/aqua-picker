/** @jsx h */
import { h } from "preact";
import type { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { stringify } from "$std/encoding/yaml.ts";
import type { PackageElement } from "@/types/aqua.d.ts";
import * as packageElement from "@/utils/package_element.ts";
import packages from "@/data/registry.json" assert { type: "json" };

interface Data {
  pkg: PackageElement;
}

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext<Data>) {
    const pkg =
      (packages as PackageElement[]).filter((i) =>
        packageElement.getName(i) === ctx.params.name
      )[0];
    if (!pkg) {
      return new Response(null, { status: 404 });
    }
    // TODO: if aliases are found, redirect to oroginal package
    const resp = await ctx.render({ pkg });
    resp.headers.set("X-Custom-Header", "Hello World");
    return resp;
  },
};

export default function Package(props: PageProps<Data>) {
  const { pkg } = props.data;
  const name = packageElement.getName(pkg);
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <h1 class={tw`font-bold text-xl`}>
        <a href={`/package/${name}`} class={tw`hover:text-underline`}>{name}</a>
      </h1>
      {pkg.description
        ? <p class={tw`my-6`}>{pkg.description}</p>
        : <p class={tw`text-gray-400 my-6`}>no description found</p>}
      <a
        href={packageElement.getLink(pkg)}
        class={tw`text-blue-600 text-underline`}
      >
        link
      </a>
      <code class={tw`text-sm bg-gray-300 block w-full overflow-y-auto`}>
        <pre>
          {stringify({ packages: [pkg] })}
        </pre>
      </code>
    </div>
  );
}
