import * as S from "./Button.style";

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  label: string;
}

const Button = ({ type = "button", label }: ButtonProps) => {
  return <S.Button type={type}>{label}</S.Button>;
};

export default Button;
