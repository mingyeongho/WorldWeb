import * as S from "./Emoji.style";

interface EmojiProps {
  label: string;

  size?: "small" | "medium" | "large";
}

const Emoji = ({ label, size = "medium" }: EmojiProps) => {
  return <S.Emoji size={size}>{label}</S.Emoji>;
};

export default Emoji;
