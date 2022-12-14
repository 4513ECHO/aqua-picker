import type { MiddlewareHandlerContext } from "$fresh/server.ts";

export const handler = [logger];

enum LogPrefix {
  Outgoing = "-->",
  Incoming = "<--",
}

function formatTime(start: number): string {
  const delta = Date.now() - start;
  return delta < 100 ? `${delta}ms` : `${Math.round(delta / 1000)}s`;
}

const color: Record<string, string> = {
  7: "#800080",
  5: "#800000",
  4: "#808000",
  3: "#008080",
  2: "#008000",
  1: "#008000",
  0: "#808000",
};

function log(
  func: (...data: unknown[]) => void,
  prefix: LogPrefix,
  method: string,
  path: string,
  status = 0,
  elapsed?: string,
): void {
  const out = prefix === LogPrefix.Incoming
    ? `%c${prefix} %c${method} ${path} %c%c`
    : `%c${prefix} %c${method} ${path} %c${status} %c${elapsed}`;
  func(
    out,
    "color: #808080",
    "",
    `color: ${color[(status / 100) | 0]}`,
    "",
  );
}

async function logger(
  req: Request,
  ctx: MiddlewareHandlerContext,
): Promise<Response> {
  const { search, pathname } = new URL(req.url);
  const [method, path] = [req.method, pathname + search];
  const func = pathname.startsWith("/_frsh/") ? console.debug : console.log;

  log(func, LogPrefix.Incoming, method, path);

  const startTime = Date.now();
  const res = await ctx.next();

  log(
    func,
    LogPrefix.Outgoing,
    method,
    path,
    res.status,
    formatTime(startTime),
  );

  return res;
}
