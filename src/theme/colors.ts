import { Theme } from 'store/slices/appSlice';

interface Colors {
   [Theme.Light]: Record<string, string>;
   [Theme.Dark]: Record<string, string>;
}

export default {
   [Theme.Light]: {
      '--bg-color': '#fff',
      '--regular-text': '#000',
   },
   [Theme.Dark]: {
      '--bg-color': '#000',
      '--regular-text': '#fff',
   },
} as Colors;
