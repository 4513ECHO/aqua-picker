/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "@/islands/Counter.tsx";
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
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <Search />
    </Page>
  );
}
