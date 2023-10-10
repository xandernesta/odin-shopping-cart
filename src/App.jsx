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
  background-image: url(./laptop_store_background.jpg);//url(./src/assets/laptop_store_background.jpg)
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
    animation: slideIn ease 1.25s;
  }
  ${FancyButton} {
    position: absolute;
    bottom: 10vh;
    left: 45.4vw;
    padding: .8rem;
    width: 10rem;
    animation: slideUp ease 1.25s;
  }
  animation: fadeIn ease 1.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    0%{
      opacity: 0;
      translate: -200px 0 ;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes slideUp {
    0%{
      opacity: 0;
      translate: 0 50px ;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @media (max-width: 768px) {
    background-position: center;
    ${FancyButton} {
      position: absolute;
      bottom: 10vh;
      left: 37vw;
    }
  }

  @media (max-width: 470px){
    h1 {
      position: absolute;
      top: 8vh;
      left: 8vw;
      font-size: 4rem;
    }
    ${FancyButton} {
      position: absolute;
      bottom: 10vh;
      left: 37vw;
  }
  }
`
