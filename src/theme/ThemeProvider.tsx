import { useEffect } from 'react';

import useTheme from 'hooks/useTheme';
import loadColors from 'common/utils/loadColors';
import colors from './colors';

const ThemeProvider = () => {
   const { theme } = useTheme();

   useEffect(() => {
      loadColors(colors[theme]);
   }, [theme]);

   return null;
};

export default ThemeProvider;
