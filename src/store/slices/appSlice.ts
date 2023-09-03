import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Theme {
   Light = 'light',
   Dark = 'dark',
}

export enum TabName {
   Account = 'account',
   Appearance = 'appearance',
   Team = 'team',
   Plan = 'plan',
}

export enum Language {
   EN = 'en',
   TR = 'tr',
}

export interface AppState {
   theme: Theme;
   language: Language;
   tab: TabName;
}

const INITIAL_STATE = {
   theme: Theme.Light,
   language: Language.EN,
   tab: TabName.Account,
} as AppState;

const appSlice = createSlice({
   name: 'app',
   initialState: INITIAL_STATE,
   reducers: {
      setTheme: (state, action: PayloadAction<Theme>) => {
         state.theme = action.payload;
      },
      setLanguage: (state, action: PayloadAction<Language>) => {
         state.language = action.payload;
      },
      setTab: (state, action: PayloadAction<TabName>) => {
         state.tab = action.payload;
      },
   },
});

export const { setTheme, setLanguage, setTab } = appSlice.actions;

export default appSlice.reducer;
