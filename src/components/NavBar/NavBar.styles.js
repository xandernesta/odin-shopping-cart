import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  font-size: 2rem;
  margin-right: 1rem;

  @media (max-width: 480px) {
    gap: 0;
    width: 100%;
  }
`
export const NavLinkStyle = styled(Link)`
  padding: 1rem;
  color: var(--light-font-color);
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`