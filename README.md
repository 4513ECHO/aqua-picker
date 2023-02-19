# Aqua Picker

[![Made with Fresh](https://fresh.deno.dev/fresh-badge-dark.svg)](https://fresh.deno.dev)

> 💧 Search [aquaproj/aqua-registry](https://github.com/aquaproj/aqua-registry)
> interactively from web, built with deno fresh 🍋

Built with [Deno](https://deno.land/) and [Fresh](https://fresh.deno.dev/),
powered by [Deno Deploy](https://deno.com/deploy).

### Usage

Please install [aqua](https://aquaproj.github.io) before.

Start the project:

```console
$ deno task start
```

This will watch the project directory and restart as necessary.

Update aqua [typing definition](./types/aqua.ts):

```console
$ deno task generate-type
```

This uses [quicktype](https://quicktype.io) and aqua's
[JSON Schema](https://aquaproj.github.io/docs/reference/registry-config/#json-schema).
