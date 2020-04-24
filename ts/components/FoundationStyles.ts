import 'reset-css/reset.css';
import { createGlobalStyle } from 'styled-components';

export const $DAWN_LIGHT_GOLD = '#DEBB9C';
export const $DAWN_BLACK = '#0F0700';

export const $GOLD_BORDER = `border: solid ${$DAWN_LIGHT_GOLD} 1px;`;

export const GlobalStyle = createGlobalStyle`
    html, body {
        font-family: "Meiryo UI";
        font-size: 12pt;
        height: 100%;
        width: 100%;
        background-color: ${$DAWN_BLACK};
    }
    button {
        background-color: #ccc;
        border-radius: 5px;
        border-style: none;
        cursor: pointer;
        padding: .5em;
        transition-property: all;
        transition-duration: .2s;
        &:hover {
            box-shadow: 3px 3px 3px rgba(200,200,200,4);
            transform: translate(-2px, -2px);
        }
        &:active {
            background-color: #cccc00;
        }
    }
    input[type=text] {
        border-radius: 5px;
        border: 1px solid #ddd;
        padding: .5em;
    }
`;

export const $COLOR_PRIMARY_0 = '#723FBD';  // MAIN PRIMARY COLOR */
export const $COLOR_PRIMARY_1 = '#AE8CE2';
