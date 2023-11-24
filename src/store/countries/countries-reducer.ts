import { AnyAction } from 'redux'
import { SET_COUNTRIES, SET_ERROR, SET_LOADING, Country } from './countries-actions'


export interface State {
    list: Country[];
    status: string;
    error: string | null;
  }
  

const initialState: State = {
    status: 'idle',
    error: null,
    list: []
}

export const countriesReducer = (state = initialState, { type, payload }: AnyAction) => {
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null
            }
        case SET_ERROR: 
            return {
                ...state,
                status: 'rejected',
                error: payload
            }
        case SET_COUNTRIES: 
            return {
                ...state,
                status: 'received',
                list: payload
            }
        default:
            return state
    }
}