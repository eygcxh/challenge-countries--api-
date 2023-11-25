import { AnyAction, Dispatch } from 'redux'

export const SET_LOADING = '@@details/SET_LOADING'
export const SET_ERROR = '@@details/SET_ERROR'
export const SET_COUNTRY = '@@details/SET_COUNTRY'

type Client = {
    get: (url: string) => Promise<any>;
  }
  
  type Api = {
    searchByCountry: any
    ALL_COUNTRIES: string;
  }
  
  export type Flags = {
    svg: string;
  }
  
  export type Country = {
    name: string;
    capital: string;
    flags: Flags;
    population: number;
    region: string;
  }
  
  export type Error = {
    message: string;
  }

const setLoading = () => ({
    type: SET_LOADING,
})

const setError = (err: Error) => ({
    type: SET_ERROR,
    payload: err,
}) 
const setCountry = (country: Country) => ({
    type: SET_COUNTRY,
    payload: country,
}) 

export const loadCountriesByName = (name: string) => (dispatch: Dispatch<AnyAction>, _: any, { client, api }: { client: Client, api: Api }) => {
    dispatch(setLoading())
  
    client.get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((err) => dispatch(setError(err.message)))
  } 