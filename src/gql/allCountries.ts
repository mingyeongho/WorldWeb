import { gql } from "@apollo/client";

const allCountries = gql`
  {
    countries {
      code
      name
      continent {
        code
        name
      }
      languages {
        code
        name
      }
      emoji
    }
  }
`;

export default allCountries;
