import { ChangeEvent, FormEvent } from "react";
import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/Input/Input";
import * as S from "./Form.style";

interface FormProps {
  inputProps: {
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  onSearch: (e: FormEvent) => void;
}

const Form = ({ inputProps, onSearch }: FormProps) => {
  return (
    <S.Form onSubmit={onSearch}>
      <Input {...inputProps} />
      <Button type="submit" label="검색" />
    </S.Form>
  );
};

export default Form;
