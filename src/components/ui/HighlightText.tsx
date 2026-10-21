type HighlightTextProps = {
  text: string;
  /** Substring of `text` to emphasise. Rendered unchanged when not found. */
  highlight?: string;
  className?: string;
};

/** Renders `text`, wrapping the first occurrence of `highlight` in an accent span. */
export function HighlightText({ text, highlight, className = "font-bold text-brand" }: HighlightTextProps) {
  const index = highlight ? text.indexOf(highlight) : -1;
  if (!highlight || index === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, index)}
      <span className={className}>{highlight}</span>
      {text.slice(index + highlight.length)}
    </>
  );
}
