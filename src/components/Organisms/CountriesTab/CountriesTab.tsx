import allCountries from "../../../gql/allCountries";
import getCountries from "../../../gql/getCountries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import TabBar from "../../Molecules/TabBar/TabBar";
import Countries from "../Countries/Countries";
import * as S from "./CountriesTab.style";

const CountriesTab = () => {
  const { query } = useRouter();
  const { data, loading } = useQuery(
    query.continent === "All" || query.continent === undefined
      ? allCountries
      : getCountries({ continent: query.continent as string })
  );

  return (
    <S.CountriesTab>
      <TabBar />
      {loading ? (
        <div>Loading...</div>
      ) : (
        data && <Countries countries={data.countries} />
      )}
    </S.CountriesTab>
  );
};

export default CountriesTab;
