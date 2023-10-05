import {
  NavWrapper,
  NavLinkStyle,
  ButtonContainer,
  Quantity
} from './NavBar.styles.js'
import { FaShoppingCart } from 'react-icons/fa'
import { StyledButton } from '../Button/Button'
import { IconContext } from 'react-icons'
import {CartProvider, useCart} from '../../context/CartContext'

export const NavBar = ({showOrCloseCart}) => {
  const {cart} = useCart()
  const cartTotal = () => {
    return cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0) 
  } 
  
  return (
    <NavWrapper>
      <NavBarLink path='/' name='Home'></NavBarLink>
      <NavBarLink path='/products' name='Products'></NavBarLink>
      <ButtonContainer>
        <StyledButton variant='round' onClick={showOrCloseCart}>
          <IconContext.Provider value={{ className: 'cartIcon' }}>
            <FaShoppingCart />
          </IconContext.Provider>
        </StyledButton>
        <CartProvider>
          {cartTotal() > 0 ? <Quantity>{cartTotal()}</Quantity> : <Quantity>0</Quantity>}
        </CartProvider>
      </ButtonContainer>
    </NavWrapper>
  )
}

const NavBarLink = ({ path, name }) => {
  return <NavLinkStyle to={path}>{name}</NavLinkStyle>
}
