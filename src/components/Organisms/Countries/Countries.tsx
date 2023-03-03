import Country from "../../Molecules/Country/Country";
import { CountryDTO } from "../../../utils/type";
import * as S from "./Countries.style";

interface CountriesProps {
  countries: CountryDTO[];
}

const Countries = ({ countries }: CountriesProps) => {
  return (
    <S.Countries>
      {countries.map((country, idx) => (
        <Country key={idx} {...country} />
      ))}
    </S.Countries>
  );
};

export default Countries;
