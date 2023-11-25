import { AnyAction } from "redux";
import { CLEAR_DETAILS, SET_COUNTRY, SET_ERROR, SET_LOADING, SET_NEIGHBORS } from "./details-action";

interface State {
    status: string;
    error: string | null;
    currentCountry: string | null;
    neighbors: string[]
  }
  

const initialState: State = {
    status: 'idle',
    error: null,
    currentCountry: null,
    neighbors: []
}

export const detailsReducer = (state = initialState, { type, payload }: AnyAction) => {
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
        case SET_COUNTRY: 
            return {
                ...state,
                status: 'received',
                currentCountry: payload
            }
        case CLEAR_DETAILS: 
            return initialState  
        case SET_NEIGHBORS: 
            return {
                ...state,
                neighbors: payload
            }
        default:
            return state
    }
}