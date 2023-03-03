import { ChangeEvent } from "react";
import * as S from "./Input.style";

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <S.Input value={value} onChange={onChange} placeholder={placeholder} />
  );
};

export default Input;
