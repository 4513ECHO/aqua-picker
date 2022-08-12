import type { MiddlewareHandlerContext } from "$fresh/server.ts";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext,
): Promise<Response> {
  const startTime = Date.now();
  const resp = await ctx.next();

  // logging (method path+params timeTaken status)
  const { search, pathname } = new URL(req.url);
  console.log(
    `${req.method} ${pathname + search} ${
      resp.headers.has("x-function-cache-hit")
        ? String.fromCodePoint(0x26a1)
        : ""
    }${Date.now() - startTime}ms ${resp.status}`,
  );

  return resp;
}
