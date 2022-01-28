import { colors, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#1E1E1E',
      primary: '#101010',
      secondary: '#181818'
    },
    primary: {
      main: '#5DF54F'
    },
    text: {
      primary: '#b3b3b3',
      secondary: colors.common.white
    }
  }
});

export default theme;
