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
        <S.Continent>{continent.name}</S.Continent>
        <S.Like>{isLike ? "💛" : "🤍"}</S.Like>
      </S.ContinentWrapper>
      <S.NationWrapper>
        <S.Flag>{emoji}</S.Flag>
        <S.NationInfoWrapper>
          <S.Name>{name}</S.Name>
          <S.Languages>
            {languages.map((language, idx) => (
              <S.Language key={idx}>{language.name}</S.Language>
            ))}
          </S.Languages>
        </S.NationInfoWrapper>
      </S.NationWrapper>
    </S.Country>
  );
};

export default Country;
