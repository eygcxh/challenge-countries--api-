import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

import { Button } from '../components/Button'
import { Info } from '../components/Info'
import { useDispatch, useSelector } from 'react-redux'
import { selectDetails } from '../store/details/details-selector'
import { useEffect } from 'react'
import { loadCountriesByName } from '../store/details/details-action'

type Params = {
  name: string | undefined;
}

export const Details = () => {
  const { name } = useParams<Params>()
  const dispatch = useDispatch()
  const { currentCountry, error, status } = useSelector(selectDetails)
  
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(loadCountriesByName(name))
  }, [name, dispatch])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && 
      <Info push={navigate} {...currentCountry} />}
    </div>
  )
}