import { createGlobalStyle } from "styled-components";

const GeneralPageStyling = createGlobalStyle`
    * {
        /* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap'); */
        font-family: 'Open Sans' !important;
        font-size: 16px;
    }

    body {
        margin: 0;
        padding: 0;
    }
`

export default GeneralPageStyling