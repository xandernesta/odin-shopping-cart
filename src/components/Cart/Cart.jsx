import React, {useContext} from 'react'
import styled, { css } from 'styled-components'
import { CartContext, CartDispatchContext } from '../../context/CartContext'

export const Cart = ({
  /*cart, toggleModal, addToCart, removeFromCart,  */ setShowCart,
  showCart
}) => {
    const cart = useContext(CartContext)
    const dispatch = useContext(CartDispatchContext);

    const toggleCart = () => {
        setShowCart(!showCart)
    }
  
  return (
    <>
      <CartModal className='cart'>
        <Title>
          <h2>Your Shopping Cart</h2>
        </Title>
      </CartModal>
      <Overlay onClick={toggleCart}></Overlay>
    </>
  )
}
const CartModal = styled.div`
  position: absolute;
  z-index: 1;
  width: 30vw;
  height: 100%;
  top: 0;
  right: 0;
  color: black;
  background-color: white /* var(--gray) */;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: all 0.25s;
`
const Overlay = styled.div`
  position: fixed;
  background-color: black;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.6;
  transition: all 0.25s;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
  text-transform: uppercase;
`
