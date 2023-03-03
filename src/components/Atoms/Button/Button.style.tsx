import { Palette } from "../../../styles/Palette";
import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${Palette.Primary};
  transition: 0.2s background-color;
  border-radius: 10px;
  padding: 6px;
  &:hover {
    cursor: pointer;
    background-color: ${Palette.Primary_Dark};
  }
`;
