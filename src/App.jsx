import { useState } from 'react'
import styled from 'styled-components'
import {FancyButton} from './components/Button/Button.jsx'
import {Footer} from './components/Footer/Footer'
import {BrowserRouter, Link} from 'react-router-dom'

function App () {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prev => prev + 1)
  }
  return (
    <>
    <BrowserRouter>
      <MainWrapper>
        <h1>Dream Computers</h1>
        <Link to="products">
          <FancyButton onClick={handleClick}>Shop Now</FancyButton>
        </Link>
      </MainWrapper>
    </BrowserRouter>
    </>
  )
}

export default App

const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  background-image: url(./src/assets/laptop_store_background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;
  height: 100vh;
  width: 100vw;
  h1 {
      position: absolute;
      top: 10vh;
      left: 10vw;
      font-size: 5rem;
      width: 100px;
      font-color: var(--light-font-color);
    }
  ${FancyButton} {
      position: absolute;
      bottom: 10vh;
      left: 45.4vw;
    }
`