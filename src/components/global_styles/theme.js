const theme = {
  colors: {
    primaryColor: '#011627',
    primaryColorClear: 'rgb(4,48,83)',
    secondaryColor: 'rgb(229,202,64)',
    accentColor: '#e5ca40',
    fontMainColor: '#ccd7f5',
    fontSecondaryColor: 'rgb(88,117,141)',
    fontBodyColor: 'rgb(136, 163, 186)',
  },
  breakpoints: {
    phoneX1: '480px',
    tabletX1: '768px',
    largeX1: '992px',
    extraLargeX1: '1200px'
  },
  // we'll stop using this one
  // in favor of global styles
  fontScale: {
    smallScreen: {
      small: '1rem',
      regular: '1.3rem',
      medium: '2.25rem',
      bigX1: '3.375rem',
      bigX2: '3.50rem',
      largeX1: '7.594rem'
    }
  },
  fontWeight: {
    regular400: 400,
    bold700: 700,
    extraBold800: 800
  },
}

export default theme