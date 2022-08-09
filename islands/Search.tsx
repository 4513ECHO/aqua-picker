/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { extendedMatch, Fzf, FzfResultItem } from "https://esm.sh/fzf@0.5.1";
import { tw } from "@twind";
import type { PackageElement } from "../aqua.ts";
import * as packageElement from "../utils/package_element.ts";
import packages from "../static/registry.json" assert { type: "json" };

const fzf = new Fzf<PackageElement[]>(packages as PackageElement[], {
  // TODO(4513ECHO): Follow original `aqua generate` behavior
  selector: (v) => packageElement.getName(v),
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
                  {packageElement.getName(entry.item)}
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
