export const SET_THEME = '@@theme/SET_THEME'
  
export interface SetThemeAction {
  type: typeof SET_THEME;
  payload: string;
}

export const setTheme = (theme: string): SetThemeAction => ({
  type: SET_THEME,
  payload: theme,
})