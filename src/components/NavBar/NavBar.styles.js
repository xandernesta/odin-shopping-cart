import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  font-size: 2rem;
  margin-right: 1rem;
  @media (max-width: 908px) {
    gap: 0;
    width: 45%;
  }
  @media (max-width: 480px) {
    gap: 0;
    width: 100%;
  }
`
export const NavLinkStyle = styled(Link)`
  padding: 1rem;
  color: var(--dark-font-color);
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: var(--light-font-color);
  }

  @media (max-width: 769px) {
    padding-top: 4px;
  }
`
export const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.02);
  }
` 
export const Quantity = styled.div`
  position: absolute;
  top: 2.6rem;
  right: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50px;
  background-color: var(--purple);
  font-size: 1.3rem;
  font-weight: bold;
`
