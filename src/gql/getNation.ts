import { gql } from "@apollo/client";

const getNation = (name: string) => gql`
  {
    country(code: "${name}") {
      code
      name 
      native
      phone 
      continent {
        code 
        name 
      }
      capital 
      currency 
      languages {
        code 
        name 
        native 
        rtl
      }
      emoji 
      states {
        code 
        name 
      }
    }
  }
`;

export default getNation;
