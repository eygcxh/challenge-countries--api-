import { useNavigate } from 'react-router-dom'

import { List } from '../components/List'
import { Card } from '../components/Card'
import { Controls } from '../components/Controls'

interface Country {
  flags: {
    png: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
}

interface CountryInfo {
  img: string;
  name: string;
  info: {
    title: string;
    description: string;
  }[];
}

export const HomePage = () => {
  const navigate = useNavigate()

  const countries: Country[] = []

  return (
    <>
      <Controls />

      <List>
        {countries.map((c) => {
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
          };

          return (
            <Card
              key={c.name}
              onClick={() => navigate(`/country/${c.name}`)}
              {...countryInfo}
            />
          )
        })}
      </List>
    </>
  )
}