import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
       background: ${(props) => props.theme["base-background"]};
    }


    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 800;
        font-size: 1rem;
    }


`;
