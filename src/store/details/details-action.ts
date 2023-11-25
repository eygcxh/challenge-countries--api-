import { AnyAction, Dispatch } from 'redux'

export const SET_LOADING = '@@details/SET_LOADING'
export const SET_ERROR = '@@details/SET_ERROR'
export const SET_COUNTRY = '@@details/SET_COUNTRY'
export const CLEAR_DETAILS = '@@details/CLEAR_DETAILS'
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS'


type Client = {
    get: (url: string) => Promise<any>;
  }
  
  type Api = {
    [x: string]: any
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

  const setNeighbors = (countries) => ({
    type: SET_NEIGHBORS,
    payload: countries,
  })

  const setCountry = (country: Country) => ({
    type: SET_COUNTRY,
    payload: country,
  }) 
  
  export const clearDetails = () => ({
    type: CLEAR_DETAILS
  })

export const loadCountriesByName = (name: string) => (dispatch: Dispatch<AnyAction>, _: any, { client, api }: { client: Client, api: Api }) => {
    dispatch(setLoading())
  
    client.get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((err) => dispatch(setError(err.message)))
  } 

export const loadNeighborsByBorder = (borders) => (dispatch: Dispatch<AnyAction>, _: any, { client, api }: { client: Client, api: Api }) => {
  client.get(api.filterByCode(borders))
    .then(({ data }) => dispatch(setNeighbors(data.map(c => c.name))))
    .catch(console.error)
} 