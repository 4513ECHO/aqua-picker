/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";

export interface AppProps {
  children: h.JSX.Element[];
  title: string;
}

const LINKS = [
  {
    title: "Source",
    href: "https://github.com/4513ECHO/aqua-picker",
  },
  {
    title: "License",
    href: "https://github.com/4513ECHO/aqua-picker/blob/main/LICENSE",
  },
  {
    title: "Aqua Official Site",
    href: "https://aquaproj.github.io/",
  },
];

export function Page(props: AppProps) {
  return (
    <div class={tw`min-h-screen`}>
      <Head>
        <title>{props.title}</title>
        <meta property="og:title" content={props.title} />
      </Head>
      <header>{/* TODO*/}</header>
      <main class={tw`p-4 max-w-screen-md mx-auto`}>{props.children}</main>
      <footer
        class={tw`bg-gray-100 h-32 flex flex-col gap-4 justify-center text(gray-600 center) sticky top-[100vh]`}
      >
        <ul class={tw`flex justify-center gap-8`}>
          {LINKS.map((link) => (
            <li class={tw`hover:underline`}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
        <p class={tw`mt-2`}>
          Powered by{" "}
          <a href="https://fresh.deno.dev" class={tw`hover:underline`}>fresh</a>
          <br />
          ©︎ {new Date().getFullYear()} Hibiki
        </p>
      </footer>
    </div>
  );
}
