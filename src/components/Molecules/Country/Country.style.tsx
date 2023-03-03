import { ContinentPalette } from "../../../styles/Palette";
import styled from "styled-components";

interface Props {
  continent: "AS" | "SA" | "NA" | "EU" | "AF" | "AN" | "OC";
}

export const Country = styled.div<Props>`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ continent }) => ContinentPalette[continent]};
  width: 180px;
  height: 110px;
`;

export const ContinentWrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  background-color: ${({ continent }) => ContinentPalette[continent]};
  color: white;
`;

export const NationWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 4px;
`;

export const Continent = styled.span`
  font-size: 1.1rem;
  font-weight: bolder;
`;

export const Like = styled.span``;

export const Flag = styled.span`
  font-size: 3rem;
`;

export const NationInfoWrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const Name = styled.span`
  font-size: 1.1rem;
`;

export const Languages = styled.div`
  display: flex;
  gap: 4px;
`;

export const Language = styled.span`
  font-size: 0.875rem;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
