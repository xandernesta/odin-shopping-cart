import { useState } from 'react'
import styled from 'styled-components'
import { FancyButton } from './components/Button/Button.jsx'
import { Footer } from './components/Footer/Footer'
import { Link } from 'react-router-dom'

export function App () {
  return (
    <MainWrapper data-testid='appbg'>
      <h1>Dream Computers</h1>
      <Link to='products'>
        <FancyButton>Shop Now</FancyButton>
      </Link>
    </MainWrapper>
  )
}

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
