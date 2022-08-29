/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { HighlightMatches } from "@/components/HighlightMatches.tsx";
import { extendedMatch, Fzf, FzfResultItem } from "fzf";
import { tw } from "@twind";
import type { PackageElement } from "@/types/aqua.d.ts";
import * as packageElement from "@/utils/package_element.ts";
import { packages } from "@/data/registry.ts";

function selector(pkg: PackageElement): string {
  const files = packageElement.getFiles(pkg)
    .filter((f) => f.name !== "").map((f) => f.name).join(", ");
  const aliases = (pkg.aliases ?? [])
    .filter((a) => a.name !== "").map((a) => a.name);
  const pkgName = packageElement.getName(pkg);
  const item: string[] = [pkgName];
  if (aliases.length > 0) {
    item.push(`(${aliases.join(", ")})`);
  }
  if (!pkgName.endsWith(`/${files}`) || pkgName === files) {
    item.push(`[${files}]`);
  }
  if (pkg.search_words && pkg.search_words.length > 0) {
    item.push(`: ${pkg.search_words.join(", ")}`);
  }
  return item.join(" ");
}

const fzf = new Fzf<PackageElement[]>(packages, {
  selector,
  match: extendedMatch,
});

export default function Search() {
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState<FzfResultItem<PackageElement>[]>([]);

  const handleInputChange = (input: string): void => {
    setInput(input);
    if (input === "") {
      setEntries([]);
      return;
    }
    setEntries(fzf.find(input));
  };

  return (
    <div class={tw`px-6 py-2`}>
      <input
        type="search"
        value={input}
        // deno-lint-ignore no-explicit-any
        onInput={(event: any) => handleInputChange(event.target.value)}
        class={tw`py-2 px-6 w-full border(1 gray-400) rounded-full outline-none focus:border-blue-500`}
        placeholder="Type to search..."
        autocomplete="off"
        spellcheck={false}
        autocorrect="off"
        disabled={!IS_BROWSER}
      />
      <div class={tw`pt-2`}>
        <ul>
          {entries.slice(0, 50).map((entry, index) => (
            <li key={index} class={tw`py-1 hover:underline`}>
              <a href={`/package/${packageElement.getName(entry.item)}`}>
                <HighlightMatches
                  str={selector(entry.item)}
                  indices={entry.positions}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
