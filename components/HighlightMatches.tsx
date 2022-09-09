export interface HighlightMatchesProps {
  str: string;
  indices: Set<number>;
}

export function HighlightMatches(props: HighlightMatchesProps) {
  const chars = props.str.split("");
  const nodes = chars.map((value, index) => {
    if (props.indices.has(index)) {
      return (
        <span key={index} class="font-semibold">
          {value}
        </span>
      );
    } else {
      return value;
    }
  });
  return <>{nodes}</>;
}
