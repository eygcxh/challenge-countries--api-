import { SET_THEME, SetThemeAction } from './theme-action'

type ThemeState = string

type ThemeAction = SetThemeAction

export const themeReducer = (state:ThemeState = 'light', { type, payload }: ThemeAction) => {
  switch(type) {
    case SET_THEME: 
      return payload
    default:
      return state
  }
} 