import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";

export interface PageProps {
  children: ComponentChildren;
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
    title: "aqua Official Site",
    href: "https://aquaproj.github.io/",
  },
];

export function Page(props: PageProps) {
  return (
    <div class="min-h-screen">
      <Head>
        <title>{props.title}</title>
        <meta property="og:title" content={props.title} />
      </Head>
      <header
        class="bg-gray-100 h-16 flex flex-col text-gray-600"
      >
        <a href="/" class="p-3 flex">
          <img
            src="https://raw.githubusercontent.com/aquaproj/aqua/main/logo/aqua_without_text.svg"
            alt="aqua Logo"
            class="h-12 w-12 px-2"
          />
          <span class="text-xl my-auto hover:underline">
            Aqua Picker
          </span>
        </a>
      </header>
      <main class="p-4 max-w-screen-md mx-auto">{props.children}</main>
      <footer
        class="bg-gray-100 h-40 flex flex-col gap-4 justify-center items-center text(gray-600 center) sticky top-[100vh]"
      >
        <nav>
          <ul class="flex justify-center gap-8">
            {LINKS.map((link) => (
              <li class="hover:underline">
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p class="mt-1">
          ©︎ {new Date().getFullYear()} Hibiki
        </p>
        <p class="h-4">
          <a href="https://fresh.deno.dev">
            <img
              class="hover:(border(1 transparent)"
              width="197"
              height="37"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
        </p>
      </footer>
    </div>
  );
}
