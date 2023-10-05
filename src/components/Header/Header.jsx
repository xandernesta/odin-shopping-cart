import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { NavBar } from '../NavBar/NavBar'

export function Header ({showOrCloseCart}) {
  return (
    <HeaderStyle>
      <StyledLink className="toApp" to='/'>Dream Computers</StyledLink>
      <NavBar showOrCloseCart={showOrCloseCart} />
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-family: 'JetBrains Mono';
  font-size: 4rem;
  font-weight: 600;
  text-align: left;
  width: 100vw;
  padding: 0.75rem;
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, var(--light-blue) 0%, var(--yellow) 100%);
  border-color: 1px solid var(--dark-font-color) ; 

  @media (max-width: 1054px) {
    font-size: 3rem;

  }
  @media (max-width: 888px) {
    .toApp{
      font-size: 2.72rem;
    }
  }
  @media (max-width: 794px) {
    flex-direction: column;
    font-size: 3rem;
    .toApp{
      font-size: 3.6rem;
    }
  }
  @media (max-width: 600px) {
    .toApp{
      font-size: 3rem;
    }
  }
  @media (max-width: 459px) {
    .toApp{
      font-size: 2.5rem;
    }
  }
  @media (max-width: 484px) {
    .toApp{
      font-size: 2rem;
    }
  }
`
const StyledLink = styled(Link)`
  &:hover {
    color: var(--dark-font-color);
  }

  
`
