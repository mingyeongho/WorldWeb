import Form from "../../Molecules/Form/Form";
import CountriesTab from "../../Organisms/CountriesTab/CountriesTab";
import * as S from "./Home.style";

const Home = () => {
  return (
    <S.Home>
      <Form />
      <CountriesTab />
    </S.Home>
  );
};

export default Home;
