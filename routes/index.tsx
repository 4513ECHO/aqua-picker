import Search from "@/islands/Search.tsx";
import { Page } from "@/components/Page.tsx";

export default function Home() {
  return (
    <Page title="Aqua Picker">
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Interactive searching from web for{" "}
        <a
          href="https://aquaproj.github.io"
          class="text-blue-500 hover:underline"
        >
          aquaproj/aqua
        </a>{" "}
        which is declarative version manager for CLI.
      </p>
      <h2 class="font-bold text-lg">What is aqua?</h2>
      <p class="my-6">
        Declarative CLI Version manager written in Go. Support Lazy Install,
        Registry, and continuous update with Renovate. CLI version is switched
        seamlessly
      </p>
      <Search />
    </Page>
  );
}
