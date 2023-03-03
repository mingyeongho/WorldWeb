import styled from "styled-components";

interface SpanProps {
  fontWeight: "bolder" | "normal";
  size: "x-small" | "small" | "medium" | "large" | "x-large";
}

export const Span = styled.span<SpanProps>`
  white-space: nowrap;
  text-overflow: ellipsis;

  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ size }) => {
    switch (size) {
      case "x-small":
        return "0.725rem";
      case "small":
        return "0.875rem";
      case "medium":
        return "1rem";
      case "large":
        return "1.1rem";
      case "x-large":
        return "1.5rem";
    }
  }};
`;
