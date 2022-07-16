import { useRecoilValue } from 'recoil';
import {
  createTheme, ThemeOptions, useMediaQuery,
} from '@mui/material';
import { amber } from '@mui/material/colors';

import { colorModeAtom } from '../../_state';

export { getDerivedTheme };

function getDerivedTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = useRecoilValue(colorModeAtom) || (prefersDarkMode ? 'dark' : 'light');
  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
          primary: { main: '#3B1BFF' },
          secondary: { main: '#f50057' },
          background: { default: '#f5f1f0' },
        }
        : {
          // palette values for dark mode
          primary: { main: amber[500] },
          secondary: { main: '#f50057' },
          background: {
            default: '#212121',
            paper: '#0a0808',
          },
        }),
    },
    typography: {
      fontFamily: [
        'Oxygen',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  };

  return createTheme(themeOptions);
}
