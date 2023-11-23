import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

import { Button } from '../components/Button'
import { Info } from '../components/Info'

// type Country = {
//   name: string | null;
// }

type Params = {
  name: string | undefined;
}

export const Details = () => {
  const { name } = useParams<Params>()
  const navigate = useNavigate()

  // const currentCountry: Country = null

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {/* {currentCountry && <Info push={navigate} {...currentCountry} />} */}
      <Info />
    </div>
  )
}