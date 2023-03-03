export type CountryDTO = {
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
};
