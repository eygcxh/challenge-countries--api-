import { AnyAction } from "redux";
import { SET_COUNTRY, SET_ERROR, SET_LOADING } from "./details-action";

interface State {
    status: string;
    error: string | null;
    currentCountry: string | null;
  }
  

const initialState: State = {
    status: 'idle',
    error: null,
    currentCountry: null
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
                list: payload
            }
        default:
            return state
    }
}