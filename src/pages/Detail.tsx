import { useNavigate, useParams, NavigateFunction } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

import { Button } from '../components/Button'
import { Info } from '../components/Info'

interface Country {
  name: string;
}

interface Params {
  name: string | undefined;
}

interface InfoProps extends Country {
  push: NavigateFunction;
}

export const Details = () => {
  const { name } = useParams<Params>()
  const navigate = useNavigate()

  const currentCountry: Country | null = null

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  )
}