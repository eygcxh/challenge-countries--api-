import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { List } from '../components/List'
import { Card } from '../components/Card'
import { Controls } from '../components/Controls'
import { selectCountries, selectVisibleCountries } from '../store/countries/countries-selector'
import { loadCountries } from '../store/countries/countries-actions'
import { selectControls } from '../store/controls/controls-selector'


type Flags = {
  svg?: string | undefined;
  png?: string | undefined;
}

interface CountryInfo {
  img: Flags;
  name: string;
  info: {
    title: string;
    description: string;
  }[];
}

export interface Country {
  flags: Flags;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export const HomePage = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { search, region } = useSelector(selectControls)
  const countries = useSelector(state => selectVisibleCountries(state, { search, region } ))
  const { status, error, qty } = useSelector(selectCountries)

  
  useEffect(() => {
    if (!qty) {
    dispatch(loadCountries())
    }
  }, [qty, dispatch])


  return (
    <>
      <Controls />

      {error && <h2>Cant't fetch data</h2>}
      {status === 'loading'&& <h2>Loading...</h2>}

      {status === 'received' && (
              <List>
              {countries.map((c: Country) => {
                const countryInfo: CountryInfo = {
                  img: c.flags.png,
                  name: c.name,
                  info: [
                    {
                      title: 'Population',
                      description: c.population.toLocaleString(),
                    },
                    {
                      title: 'Region',
                      description: c.region,
                    },
                    {
                      title: 'Capital',
                      description: c.capital,
                    },
                  ],
                }
      
                return (
                  <Card
                    key={c.name}
                    onClick={() => navigate(`/country/${c.name}`)}
                    {...countryInfo}
                  />
                )
              })}
            </List>
      )}
    </>

  )
}