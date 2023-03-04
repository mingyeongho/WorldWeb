import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  initialValue: string;
}

const useForm = ({ initialValue }: Props) => {
  const [input, setInput] = useState(initialValue);
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.toUpperCase());
  };

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    if (/^[A-Z]{2}$/.test(input)) {
      router.push(`/${input}`);
      setInput("");
    } else {
      alert("국가코드를 다시 입력해주세요.");
    }
  };

  return { input, onChange, onSearch };
};

export default useForm;
