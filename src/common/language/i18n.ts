import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from 'common/language/locales/en.json';
import TR from 'common/language/locales/tr.json';

i18n.use(initReactI18next).init({
   lng: 'en',
   resources: {
      en: { translation: EN },
      tr: { translation: TR },
   },
});

export default i18n;
