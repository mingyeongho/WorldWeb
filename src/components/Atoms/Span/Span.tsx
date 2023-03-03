import * as S from "./Span.style";

interface SpanProps {
  label: string;

  fontWeight?: "bolder" | "normal";
  size?: "x-small" | "small" | "medium" | "large" | "x-large";
}

const Span = ({ label, size = "medium", fontWeight = "normal" }: SpanProps) => {
  return (
    <S.Span fontWeight={fontWeight} size={size}>
      {label}
    </S.Span>
  );
};

export default Span;
