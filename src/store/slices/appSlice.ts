import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Theme {
   Light = 'light',
   Dark = 'dark',
}

export enum TabName {
   Appearance = 'Appearance',
   Team = 'Team',
   Plan = 'Plan',
   Buttons = 'Buttons',
   Haptic = 'Haptic',
   App_Data = 'App Data',
   User_Data = 'User Data',
   Chat_Data = 'Chat Data',
   Events = 'Events',
   Security = 'Security',
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
   tab: TabName.Appearance,
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
