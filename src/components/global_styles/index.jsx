import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GeneralPageStyling = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        font-family: 'Open Sans';
    }

    :root {
        /* font-sizes */
        --fs-900: 3.5rem;
        --fs-800: 2.5rem;
        --fs-700: 1.5rem;
        --fs-600: 1rem;
        --fs-500: 1.75rem;
        --fs-400: 0.9375rem;
        --fs-300: 1rem;
        --fs-200: 0.875rem;
    }

    @media (
        (min-width: ${theme.breakpoints.tabletX1})
    ) {
        :root {
            /* font-sizes */
            --fs-900: 4.2rem;
            --fs-600: 1.1rem;
        }   
        
    }

    @media ((min-width: ${theme.breakpoints.largeX1})) {
        :root {
            /* font-sizes */
            --fs-900: 4.4rem;
            --fs-800: 3rem;
            --fs-700: 2.5rem;
            --fs-600: 1.2rem;
        }   
    }
    @media ((min-width: ${theme.breakpoints.extraLargeX1})
        and (min-height: 950px)) {
        :root {
            /* font-sizes */
            --fs-900: 8rem;
            --fs-600: 2rem;
        }   
    }

    body {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

`

export default GeneralPageStyling