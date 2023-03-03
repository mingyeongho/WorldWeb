import Span from "../../Atoms/Span/Span";
import Emoji from "../../Atoms/Emoji/Emoji";
import * as S from "./Country.style";

interface CountryProps {
  code: string;
  name: string;
  continent: {
    code: "AS" | "SA" | "NA" | "EU" | "AF" | "AN" | "OC";
    name: string;
  };
  languages: {
    code: string;
    name: string;
  }[];
  emoji: string;
}

const Country = ({ name, continent, languages, emoji }: CountryProps) => {
  const isLike = localStorage.getItem("likeCountry");

  return (
    <S.Country continent={continent.code}>
      <S.ContinentWrapper continent={continent.code}>
        <Span label={continent.name} fontWeight="bolder" />
        <Emoji label={isLike ? "💛" : "🤍"} />
      </S.ContinentWrapper>
      <S.NationWrapper>
        <Emoji label={emoji} size="large" />
        <S.NationInfoWrapper>
          <Span label={name} size="large" />
          <S.Languages>
            {languages.map((language, idx) => (
              <Span key={idx} label={language.name} size="small" />
            ))}
          </S.Languages>
        </S.NationInfoWrapper>
      </S.NationWrapper>
    </S.Country>
  );
};

export default Country;
