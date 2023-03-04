import styled from "styled-components";

interface EmojiProps {
  size: "small" | "medium" | "large" | "x-large";
}

export const Emoji = styled.span<EmojiProps>`
  cursor: pointer;
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return ".875rem";
      case "medium":
        return "1rem";
      case "large":
        return "3rem";
      case "x-large":
        return "5rem";
    }
  }};
`;
