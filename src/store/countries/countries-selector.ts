import { State } from "./countries-reducer"

export const selectCountries = (state: { countries: State }) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length
})

export const selectAllCountries = (state: { countries: State }) => state.countries.list