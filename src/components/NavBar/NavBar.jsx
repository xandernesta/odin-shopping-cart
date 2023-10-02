import {
  NavWrapper,
  NavLinkStyle,
  ButtonContainer,
  Quantity
} from './NavBar.styles.js'
import { FaShoppingCart } from 'react-icons/fa'
import { StyledButton } from '../Button/Button'
import { IconContext } from 'react-icons'

export const NavBar = () => {
  return (
    <NavWrapper>
      <NavBarLink path='/' name='Home'></NavBarLink>
      <NavBarLink path='/products' name='Products'></NavBarLink>
      <ButtonContainer>
        <StyledButton variant={'round'} >
          <IconContext.Provider value={{ className: 'cartIcon' }}>
            <FaShoppingCart />
          </IconContext.Provider>
        </StyledButton>
        <Quantity>0</Quantity>
      </ButtonContainer>
    </NavWrapper>
  )
}

const NavBarLink = ({ path, name }) => {
  return <NavLinkStyle to={path}>{name}</NavLinkStyle>
}
