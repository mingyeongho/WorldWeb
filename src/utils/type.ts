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

export type NationDTO = {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: {
    code: "AS" | "SA" | "NA" | "EU" | "AF" | "AN" | "OC";
    name: string;
  };
  capital: string;
  currency: string;
  languages: {
    code: string;
    name: string;
    native: string;
    rtl: boolean;
  }[];
  emoji: string;
  states: {
    code: string;
    name: string;
  }[];
};
