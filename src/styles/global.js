import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body{
        background-color: ${props => props.theme.COLORS.BACKGROUND};
        -webkit-font-smoothing: antialiased
    }

    body, input, button, textarea{
        font-family: "Noto Sans", sans-serif;
        outline: none;
    }

    button, a{
        cursor: pointer;
        transition: 0.2s;
    }

    a{
        text-decoration: none;
    }
`;