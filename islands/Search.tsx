/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { HighlightMatches } from "@/components/HighlightMatches.tsx";
import { extendedMatch, Fzf, FzfResultItem } from "fzf";
import { tw } from "@twind";
import type { PackageElement } from "@/types/aqua.d.ts";
import * as packageElement from "@/utils/package_element.ts";
import packages from "@/data/registry.json" assert { type: "json" };

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

const fzf = new Fzf<PackageElement[]>(packages as PackageElement[], {
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
    <div class={tw`px-6`}>
      <div>
        <input
          type="search"
          value={input}
          onChange={(event) => handleInputChange(event.currentTarget.value)}
          onKeyUp={(event) => handleInputChange(event.currentTarget.value)}
          class={tw`py-2 px-3 w-full border-b-2 border-gray-400 outline-none focus:border-purple-500`}
          placeholder="Type to search"
          disabled={!IS_BROWSER}
        />
      </div>
      <div class={tw`pt-2`}>
        {input !== ""
          ? (
            <ul>
              {entries.map((entry, index) => (
                <li key={index} class={tw`py-1`}>
                  <a
                    href={`/package/${packageElement.getName(entry.item)}`}
                    class={tw`hover:text-underline`}
                  >
                    <HighlightMatches
                      str={selector(entry.item)}
                      indices={entry.positions}
                    />
                  </a>
                  <span class={tw`text-sm pl-4 italic text-gray-400`}>
                    {entry.score}
                  </span>
                </li>
              ))}
            </ul>
          )
          : (
            <div class={tw`text-gray-600 py-1`}>
              List MRU + contextual when query or in frequency (frequent +
              recency) when input is empty
            </div>
          )}
      </div>
    </div>
  );
}
