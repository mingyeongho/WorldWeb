import styled from "styled-components";

interface EmojiProps {
  size: "small" | "medium" | "large";
}

export const Emoji = styled.span<EmojiProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return ".875rem";
      case "medium":
        return "1rem";
      case "large":
        return "3rem";
    }
  }};
`;
