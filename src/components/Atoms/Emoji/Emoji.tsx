import * as S from "./Emoji.style";

interface EmojiProps {
  label: string;

  size?: "small" | "medium" | "large" | "x-large";

  onClick?: () => void;
}

const Emoji = ({ label, size = "medium", onClick }: EmojiProps) => {
  return (
    <S.Emoji size={size} onClick={onClick}>
      {label}
    </S.Emoji>
  );
};

export default Emoji;
