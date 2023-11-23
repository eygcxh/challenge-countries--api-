import { AnyAction } from 'redux'
import { SET_COUNTRIES, SET_ERROR, SET_LOADING, Country } from './countries-actions'


export type State = {
    status: 'idle' | 'loading' | 'rejected' | 'received';
    error: string | null;
    list: Country[]
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