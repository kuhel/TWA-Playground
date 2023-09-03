import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { Theme, setTheme } from 'store/slices/appSlice';

interface UseTheme {
   theme: Theme;
   setCurrentTheme: (theme: Theme) => void;
   toggleTheme: () => void;
}

const useTheme = (): UseTheme => {
   const dispatch = useDispatch();

   const { theme } = useSelector((state: RootState) => state.app);

   const setCurrentTheme = useCallback((theme: Theme) => {
      dispatch(setTheme(theme));
   }, []);

   const toggleTheme = useCallback(() => {
      if (theme === Theme.Light) {
         setCurrentTheme(Theme.Dark);
      } else if (theme === Theme.Dark) {
         setCurrentTheme(Theme.Light);
      }
   }, [theme, setCurrentTheme]);

   return { theme, setCurrentTheme, toggleTheme };
};

export default useTheme;
