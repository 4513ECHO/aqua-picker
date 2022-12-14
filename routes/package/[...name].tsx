import type { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { stringify } from "$std/encoding/yaml.ts";
import type { PackageElement } from "@/types/aqua.d.ts";
import * as packageElement from "@/utils/package_element.ts";
import { packages } from "@/data/registry.ts";
import { Page } from "@/components/Page.tsx";

interface Data {
  pkg: PackageElement;
}

export const handler: Handlers = {
  async GET(_req: Request, ctx: HandlerContext<Data>) {
    const pkg =
      packages.filter((i) => packageElement.getName(i) === ctx.params.name)[0];
    if (!pkg) {
      return ctx.renderNotFound();
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
    <Page title={`${name} | Aqua Picker`}>
      <div class="flex my-auto">
        <h1 class="font-bold text-xl">
          <a href={`/package/${name}`} class="hover:underline">{name}</a>
        </h1>
        <a
          href={packageElement.getLink(pkg)}
          class="px-3 py-1 mx-3 text(sm white) bg-gray-800 border-1 rounded-lg hover:(text-gray-800 bg-white border(1 gray-800))"
        >
          View link
        </a>
      </div>
      {pkg.description
        ? <p class="my-6">{pkg.description}</p>
        : <p class="my-6 text-gray-400">no description found</p>}
      <table class="table-fixed border">
        <thead>
          <tr>
            <th class="p-2">Supported Envs</th>
            <th class="p-2">Checksum</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="border p-2">
              {pkg.supported_envs?.join(", ") ?? "all"}
            </td>
            <td class="border p-2">
              {pkg.checksum?.enabled ? "supported" : "unsupported"}
            </td>
          </tr>
        </tbody>
      </table>
      <h2 class="my-4 font-bold text-lg">Installation</h2>
      <code class="p-2 text-sm text-white bg-gray-800 block w-full overflow-y-auto">
        <pre>$ aqua g -i {name}</pre>
      </code>
      <h2 class="my-4 font-bold text-lg">registry.yaml</h2>
      <code class="p-2 text-sm text-white bg-gray-800 block w-full overflow-y-auto">
        <pre>
          {stringify({ packages: [pkg] })}
        </pre>
      </code>
    </Page>
  );
}
