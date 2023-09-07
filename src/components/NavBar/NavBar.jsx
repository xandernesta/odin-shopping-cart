import {NavWrapper, NavLinkStyle} from './NavBar.styles.js'
import { FaShoppingCart } from 'react-icons/fa'

export const NavBar = () => {

    return(
        <NavWrapper>
            <NavBarLink path='/' name='Home'></NavBarLink>
            <NavBarLink path='/products' name='Products'></NavBarLink>
            <FaShoppingCart />
        </NavWrapper>
    )
}

const NavBarLink = ({ path, name }) => {
    
    return (
        <NavLinkStyle to={path}>{name}</NavLinkStyle>
    )
    
}