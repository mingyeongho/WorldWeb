import { createGlobalStyle } from "styled-components";
import { Palette } from "./Palette";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #__next {
        width: 100%;
        height: 100%;
    }

    #__next {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${Palette.Primary};
    }

    a {
        text-decoration: none;
        color: inherit
    }
`;
