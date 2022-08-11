/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";

export interface HighlightMatchesProps {
  str: string;
  indices: Set<number>;
}

export function HighlightMatches(props: HighlightMatchesProps) {
  const chars = props.str.split("");
  const nodes = chars.map((value, index) => {
    if (props.indices.has(index)) {
      return (
        <span key={index} className={tw`font-semibold`}>
          {value}
        </span>
      );
    } else {
      return value;
    }
  });
  return <>{nodes}</>;
}
