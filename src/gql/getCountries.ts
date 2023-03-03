import { gql } from "@apollo/client";

interface Props {
  continent: string;
}

const getCountries = ({ continent }: Props) => gql`
  {
    countries(filter: {
        continent: {
            eq: "${continent}"
        }
    }) {
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

export default getCountries;
