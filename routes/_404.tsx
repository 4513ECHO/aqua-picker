import type { UnknownPageProps } from "$fresh/server.ts";
import { Page } from "@/components/Page.tsx";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <Page title="404 Not Found | Aqua Picker">
      <h1 class="font-bold text-xl">404 Not Found</h1>
      <p class="my-4">
        <span class="font-mono">{url.pathname}</span> is not a valid path
      </p>
    </Page>
  );
}
