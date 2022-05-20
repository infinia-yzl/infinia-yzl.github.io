import * as React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  useTheme, IconButton, Box,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import useMediaQuery from '@mui/material/useMediaQuery';

import { colorModeAtom } from '../_state';

export { ThemeToggle };

function ThemeToggle() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = useRecoilValue(colorModeAtom) || (prefersDarkMode ? 'dark' : 'light');
  const setColor = useSetRecoilState(colorModeAtom);

  const currentTheme = useTheme();
  const { palette } = currentTheme;
  const toggleLightDark = (prevMode: 'light' | 'dark' | null) => {
    const color = prevMode || palette.mode;
    return color === 'light' ? 'dark' : 'light';
  };
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setColor((prevMode: 'light' | 'dark' | null) => (
          toggleLightDark(prevMode)
        ));
      },
    }),
    [],
  );

  return (
    <Box>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}
