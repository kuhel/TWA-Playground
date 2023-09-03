import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import i18n from 'common/language/i18n';

import { RootState } from 'store';
import { Language, setLanguage } from 'store/slices/appSlice';

const useLanguage = () => {
   const dispatch = useDispatch();

   const { language } = useSelector((state: RootState) => state.app);

   const setCurrentLanguage = useCallback((language: Language) => {
      i18n.changeLanguage(language);
      dispatch(setLanguage(language));
   }, []);

   return { language, setCurrentLanguage };
};

export default useLanguage;
