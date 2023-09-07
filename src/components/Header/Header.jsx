import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {NavBar} from '../NavBar/NavBar'

export function Header(){
  return (
    <HeaderStyle>
      <Link to="/">Dream Computers</Link>
      <NavBar />
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
  padding: .75rem;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, var(--light-blue) 0%, var(--yellow) 100%);
  border-color: 1px solid var(--dark-font-color);
  ${Link}{
      font-family: 'Montserrat';
  }
  ${Link}:hover{
      color: var(--light-font-color);
  }

`

