import TabBar from "../../Molecules/TabBar/TabBar";
import Countries from "../Countries/Countries";
import * as S from "./CountriesTab.style";

const CountriesTab = () => {
  return (
    <S.CountriesTab>
      <TabBar />
      <Countries />
    </S.CountriesTab>
  );
};

export default CountriesTab;
