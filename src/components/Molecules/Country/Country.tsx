import Span from "../../Atoms/Span/Span";
import Emoji from "../../Atoms/Emoji/Emoji";
import * as S from "./Country.style";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

const Country = ({ code, name, continent, languages, emoji }: CountryProps) => {
  const router = useRouter();
  const [isLike, setIsLike] = useState(false);

  const onClickLike = (e: React.MouseEvent) => {
    setIsLike((prev) => !prev);
    e.stopPropagation();
  };

  const onClickCountry = () => {
    router.push(`/${code}`);
  };

  useEffect(() => {
    const getLikeCountries = localStorage.getItem("likeCountries");

    if (getLikeCountries && getLikeCountries !== "{}") {
      // localStorage가 존재할 경우
      const arrGetLikeCountries: string[] = JSON.parse(getLikeCountries);
      const isExistCountry = arrGetLikeCountries.includes(code);
      if (isExistCountry) {
        setIsLike(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isLike) {
      const getLikeCountries = localStorage.getItem("likeCountries");

      if (getLikeCountries) {
        const arrGetLikeCountries: string[] = JSON.parse(getLikeCountries);
        const uniqLikeCountries = [...new Set(arrGetLikeCountries).add(code)];
        localStorage.setItem(
          "likeCountries",
          JSON.stringify(uniqLikeCountries)
        );
      } else {
        localStorage.setItem("likeCountries", JSON.stringify([code]));
      }
    } else {
      const getLikeCountries = localStorage.getItem("likeCountries");

      if (getLikeCountries) {
        const arrGetLikeCountries: string[] = JSON.parse(getLikeCountries);

        const uniqLikeCountries = new Set(arrGetLikeCountries);
        uniqLikeCountries.delete(code);

        localStorage.setItem(
          "likeCountries",
          JSON.stringify([...uniqLikeCountries])
        );
      }
    }
  }, [isLike]);

  return (
    <S.Country continent={continent.code} onClick={onClickCountry}>
      <S.ContinentWrapper continent={continent.code}>
        <Span label={continent.name} fontWeight="bolder" />
        <Emoji label={isLike ? "💛" : "🤍"} onClick={onClickLike} />
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
