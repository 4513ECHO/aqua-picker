import { ComponentChildren } from "preact";
import { isArray } from "https://deno.land/x/unknownutil@v2.1.0/mod.ts";

function isMatrix<T>(x: unknown): x is T[][] {
  return isArray(x) && isArray(x[0]);
}

export interface TableProps {
  head: ComponentChildren[];
  col?: ComponentChildren[];
  wrapBody?: boolean;
  body: ComponentChildren[] | ComponentChildren[][];
}

export function Table(props: TableProps) {
  return (
    <table class="table-fixed border">
      <thead>
        <tr>
          {props.col && <td class="border"></td>}
          {props.head.map((i) => <th scope="row" class="border p-2">{i}</th>)}
        </tr>
      </thead>
      <tbody>
        {isMatrix<ComponentChildren>(props.body)
          ? (props.body.map((row, idx) => (
            <tr class="text-center">
              {props.col && (
                <th scope="col" class="border p-2">{props.col[idx]}</th>
              )}
              {row.map((col) =>
                (props.wrapBody ?? true)
                  ? <td class="border p-2">{col}</td>
                  : col
              )}
            </tr>
          )))
          : (
            <tr class="text-center">
              {props.col && (
                <th scope="col" class="border p-2">{props.col[0]}</th>
              )}
              {props.body.map((col) =>
                (props.wrapBody ?? true)
                  ? <td class="border p-2">{col}</td>
                  : col
              )}
            </tr>
          )}
      </tbody>
    </table>
  );
}
