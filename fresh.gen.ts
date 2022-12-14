// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_middleware.ts";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/package/[...name].tsx";
import * as $4 from "./routes/random.ts";
import * as $$0 from "./islands/Search.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_middleware.ts": $1,
    "./routes/index.tsx": $2,
    "./routes/package/[...name].tsx": $3,
    "./routes/random.ts": $4,
  },
  islands: {
    "./islands/Search.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
