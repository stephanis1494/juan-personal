import { createGlobalStyle } from "styled-components";
import theme from "./theme";
const GeneralPageStyling = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Open Sans';
    }

    body {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
`

export default GeneralPageStyling