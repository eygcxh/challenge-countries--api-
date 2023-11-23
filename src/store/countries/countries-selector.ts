import { Dispatch } from 'redux'

export const SET_COUNTRIES = '@@country/SET_COUNTRIES'
export const SET_LOADING = '@@country/SET_LOADING'
export const SET_ERROR = '@@country/SET_ERROR'

type Client = {
  get: (url: string) => Promise<any>;
}

type Api = {
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

export const setCountries = (countries: Country[]) => ({
  type: SET_COUNTRIES,
  payload: countries
})

export const setLoading = () => ({
  type: SET_LOADING
})

export const setError = (err: Error) => ({
  type: SET_ERROR,
  payload: err
})

export const loadCountries = () => (dispatch: Dispatch, _: any, { client, api }: { client: Client, api: Api }) => {
  dispatch(setLoading())

  client.get(api.ALL_COUNTRIES)
    .then(({ data }) => dispatch(setCountries(data)))
    .catch((err) => dispatch(setError(err)))
}




