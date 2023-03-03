import { ContinentPalette } from "../../../styles/Palette";
import styled from "styled-components";

interface Props {
  continent: "ALL" | "AS" | "EU" | "SA" | "NA" | "AF" | "OC" | "AN";
  isFocus: boolean;
}

export const TabBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

export const Menu = styled.span<Props>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  white-space: nowrap;

  background-color: ${({ continent, isFocus }) => {
    if (isFocus) {
      return ContinentPalette[continent];
    } else {
      return "white";
    }
  }};
  color: ${({ isFocus }) => {
    if (isFocus) {
      return "white";
    } else {
      return "black";
    }
  }};
`;
