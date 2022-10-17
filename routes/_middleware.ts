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

function statusColor(status: number): string {
  const out: Record<string, string> = {
    7: "#ff00ff",
    5: "#ff0000",
    4: "#ffff00",
    3: "#00ffff",
    2: "#00ff00",
    1: "#00ff00",
    0: "#ffff00",
  };
  return out[(status / 100) | 0];
}

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
    "font: bold",
    `color: ${statusColor(status)}`,
    "",
  );
}

async function logger(
  req: Request,
  ctx: MiddlewareHandlerContext,
): Promise<Response> {
  // logging (method path+params timeTaken status)
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
