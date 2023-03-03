import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  initialValue: string;
}

const useForm = ({ initialValue }: Props) => {
  const [input, setInput] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.toUpperCase());
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  };

  return { input, onChange, onSearch };
};

export default useForm;
