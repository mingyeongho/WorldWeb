import Span from "../../Atoms/Span/Span";
import { NationDTO } from "@/utils/type";
import * as S from "./Nation.style";
import Emoji from "../../Atoms/Emoji/Emoji";

interface NationProps {
  nation: NationDTO;
}

const Nation = ({ nation }: NationProps) => {
  const {
    emoji,
    name,
    capital,
    code,
    continent,
    currency,
    languages,
    native,
    phone,
    states,
  } = nation;
  return (
    <S.Nation>
      <Emoji label={emoji} size="x-large" />
      <Span label={`이름: ${name}`} />
      <Span label={`Code: ${code}`} />
      <Span label={`Native: ${native}`} />
      <Span label={`수도: ${capital}`} />
      <Span label={`통화: ${currency}`} />
      <Span label={`Phone: ${phone}`} />
      <Span label={`대륙: ${continent.name}(${continent.code})`} />
      <S.LanguagesWrapper>
        <Span label="Languages: " />
        <S.Languages>
          {languages.map((language, idx) => (
            <Span key={idx} label={`${language.name}(${language.native})`} />
          ))}
        </S.Languages>
      </S.LanguagesWrapper>
      <S.StatesWrapper>
        <Span label="States: " />
        <S.States>
          {states.map((state, idx) => (
            <Span key={idx} label={state.name} />
          ))}
        </S.States>
      </S.StatesWrapper>
    </S.Nation>
  );
};

export default Nation;
