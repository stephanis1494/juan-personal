import { createGlobalStyle } from "styled-components";
import CONSTANTS from "./constants";

const GeneralPageStyling = createGlobalStyle`
    * {
        font-family: 'Open Sans' !important;
        font-size: 16px;
    }

    body {
        margin: 0;
        padding: 0;
        background: ${CONSTANTS.colors.primaryColor};
    }
`

export default GeneralPageStyling