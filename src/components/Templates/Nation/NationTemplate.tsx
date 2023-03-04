import Nation from "../../Organisms/Nation/Nation";
import { ChangeEvent } from "react";
import useForm from "../../../hooks/useForm";
import Form from "../../Molecules/Form/Form";
import * as S from "./NationTemplate.style";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import getNation from "../../../gql/getNation";
import Link from "next/link";

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const NationTemplate = () => {
  const router = useRouter();
  const { query } = router;
  const { input, onChange, onSearch } = useForm({ initialValue: "" });
  const { data, loading } = useQuery(getNation(query.nation as string));
  const inputProps: InputProps = {
    value: input,
    placeholder: "국가코드 (KR, US, ...)",
    onChange,
  };

  return (
    <S.NationTemplate>
      <Link href="/">Home</Link>
      <Form inputProps={inputProps} onSearch={onSearch} />
      {loading ? (
        <div>Loading...</div>
      ) : data.country ? (
        <Nation nation={data.country} />
      ) : (
        <div>국가코드를 다시 확인해주세요.</div>
      )}
    </S.NationTemplate>
  );
};

export default NationTemplate;
