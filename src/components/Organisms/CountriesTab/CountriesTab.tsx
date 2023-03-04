import allCountries from "../../../gql/allCountries";
import getCountries from "../../../gql/getCountries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import TabBar from "../../Molecules/TabBar/TabBar";
import Countries from "../Countries/Countries";
import * as S from "./CountriesTab.style";
import likeCountries from "@/gql/likeCountries";

const CountriesTab = () => {
  const { query } = useRouter();

  const queryArg = () => {
    switch (query.continent) {
      case "All":
      case undefined:
        return allCountries;

      default:
        return getCountries({ continent: query.continent as string });
    }
  };
  const { data, loading } = useQuery(queryArg());

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
