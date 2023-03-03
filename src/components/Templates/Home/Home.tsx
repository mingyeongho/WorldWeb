import { ChangeEvent } from "react";
import Form from "../../Molecules/Form/Form";
import CountriesTab from "../../Organisms/CountriesTab/CountriesTab";
import * as S from "./Home.style";
import useForm from "../../../hooks/useForm";

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Home = () => {
  const { input, onChange, onSearch } = useForm({ initialValue: "" });
  const inputProps: InputProps = {
    value: input,
    placeholder: "국가코드 (KR, US, ...)",
    onChange,
  };

  return (
    <S.Home>
      <Form inputProps={inputProps} onSearch={onSearch} />
      <CountriesTab />
    </S.Home>
  );
};

export default Home;
