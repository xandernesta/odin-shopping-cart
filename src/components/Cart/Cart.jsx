import React, {useContext} from 'react'
import styled, { css } from 'styled-components'
import { useCart, useCartDispatch } from '../../context/CartContext'
import {CartItemCard} from './CartItemCard'
import {AiOutlineClose} from 'react-icons/ai'
import {IconContext} from 'react-icons'
import {StyledButton} from '../Button/Button'



export const Cart = ({isCartOpen,showOrCloseCart}) => {
    const {cart, showCart, toggleShowCart} = useCart();
    const dispatch = useCartDispatch();
    const cartItems = cart
    const sumTotalCost = () => {
      return cart
        .reduce(
          (total, cartItem) => total + cartItem.price * cartItem.quantity,
          0
        )
        .toFixed(2)
    }
    const itemCards = cartItems.map(item => (
      <CartItemCard
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        img={item.image}
        quantity={item.quantity}
      />
    ))
  return (
    <>
      <CartModal className='cart' isCartOpen={isCartOpen}>
        <ButtonContainer onClick={showOrCloseCart}>
          <IconContext.Provider value={{ className: 'cartClose' }}>
              <AiOutlineClose />
          </IconContext.Provider>
        </ButtonContainer>
        <Title>
          <h2>Your Shopping Cart</h2>
        </Title>
        <CartItemsContainer>{itemCards}</CartItemsContainer> 
        <Total>Total: ${sumTotalCost()}</Total>
        <CheckoutButton>CHECKOUT</CheckoutButton>
      </CartModal>
      <Overlay onClick={showOrCloseCart}>
        {isCartOpen ? <></> : <Backdrop></Backdrop>}
      </Overlay>
    </>
  )
}
const CartModal = styled.div`
  position: fixed;
  z-index: 1;
  width: 30vw;
  height: 100%;
  top: 0;
  right: 0;
  color: black;
  background-color: rgb(245,245,245) /* var(--gray) */;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  transition: all ease-in-out;
  overflow-y: scroll;
  animation: slideIn ease .5s;

  @keyframes slideIn {
    0% {
      right: -110%;
    }
    100% {
      right: 0;
    }
  }
  @media (max-width: 1700px){
    width: 40vw;
  }
  @media (max-width: 1300px){
    width: 45vw;
  }
  @media (max-width: 1000px){
    width: 55vw;
  }
  @media (max-width: 812px) {
    width: 100vw;
  }
  @media (max-width: 432px){
    padding: .4rem;
  }
`
const Overlay = styled.div`
  position: fixed;
  background-color: black;
  width: 100%;
  height: 100%;
  top: 0;
  animation: fadeCartIn ease .2s;
  opacity: 0.95;
  backdrop-filter: blur(10px);
  @keyframes fadeCartIn {
    0% {
      opacity: 0;
      backdrop-filter: blur(0px); 
      
    }
    100% {
      opacity: 0.8;
      backdrop-filter: blur(10px); 
      
    }
  }
`
const Backdrop = styled.div`
  height: 100%;
  width:100%;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.8);
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  text-transform: uppercase;
  @media(max-height: 382px){
    padding-bottom: 0;
  }
  
`
export const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
  transition: transform 0.15s ease-in-out;
  width: 1.2rem;

  &:hover {
    color: grey;
  }
`
const CartItemsContainer = styled.div`
  overflow: auto;
`
const Total = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  @media(max-height: 382px){
    font-size: 1.2rem;
  }
`
const CheckoutButton = styled(StyledButton)`
  font-family: "Montserrat","JetBrains Mono","Poppins";
  width: 65%;
  align-self: center;
  margin-top: auto;
  border-radius: 5px;
  background-color: var(--dark-aqua);

  @media(max-height: 382px){
    height: 2rem;
    width: 50%;
  }

`