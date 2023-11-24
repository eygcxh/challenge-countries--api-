import styled from 'styled-components'
import { useEffect } from 'react'
import { MdOutlineDarkMode } from "react-icons/md"
import { IoMdSunny } from "react-icons/io"
import { useSelector, useDispatch } from 'react-redux'

import { Container } from './Container'
import { setTheme } from '../store/theme/theme-action'
import { clearControls } from '../store/controls/controls-actions'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold);
  text-transform: capitalize;
`

interface RootState {
  theme: string;
}

export const Header: React.FC = () => {
  const dispatch = useDispatch()
  const theme = useSelector<RootState, string>((state) => state.theme)

  const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))

  const cleanUp = () => dispatch(clearControls())

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <h2 className='title' onClick={cleanUp}>Where is the world?</h2>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? 
              <IoMdSunny size="14px" />
            : 
              <MdOutlineDarkMode size="14px" />
            }
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}
