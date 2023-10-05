import React, {useContext} from 'react'
import styled, { css } from 'styled-components'
import { CartProvider, useCart, useCartDispatch} from '../../context/CartContext'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { SquareButton } from '../Button/Button'

export const CartItemCard = ({id, title, price, img, quantity}) => {
  const {cart} = useCart()
  const dispatch = useCartDispatch()
  
    return(
        <ItemCardWrapper>
            <ImageContainer>
                <Image src={img} alt={title} />
            </ImageContainer>
            <Details>
                <Info>
                <Title>{title}</Title>
                <PriceAndQuantContainer>
                  <div>${price.toFixed(2)}</div>
                  <ButtonAndQuantContainer>
                  <CartProvider>
                    <SquareButton onClick={() =>
                      dispatch({
                        type: 'removed',
                        id: id,
                      })}
                    >
                      <AiOutlineMinus />
                    </SquareButton> 
                    <CartQuantity>{quantity}</CartQuantity>
                    <SquareButton onClick={() =>
                      dispatch({
                        type: 'added',
                        id: id,
                      })}>
                        <AiOutlinePlus />
                    </SquareButton>
                  </CartProvider>
                  </ButtonAndQuantContainer>
                  
                </PriceAndQuantContainer>
          
                </Info>
            </Details>
        </ItemCardWrapper>
    )
}

const ItemCardWrapper = styled.div`
  display: flex;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  font-size: 1rem;
  margin: 1rem;
  @media (max-width: 550px) {
    margin: 0;
  }
  @media(max-height: 382px){
    max-height: 80%;
  }
`
const ImageContainer = styled.div`
  height: 80%;
  padding: .6rem;
  margin: 0 auto;
`
const Image = styled.img`
  height: 20vh;
  @media (max-width: 382px){
    height: 14vh
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1rem;
  max-width: 15rem;
  @media (max-width: 550px) {
    padding: .5rem 0 ;
  }
  @media (max-width: 432px) {
    max-width: 10rem;
    padding: .5rem 0 ;
  }
  @media (max-height: 382px){
    padding: 0;
    max-width: 20rem;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  height: 100%;

  @media (max-width: 800px) {
    gap: 1.5rem;
  }
  @media (max-width: 432px) {
    gap: 1.5rem;
  }
  @media (max-height: 382px){
    gap: .2rem;
    padding: 0 .2rem;
  }

`
const Title = styled.div`
  font-weight: bold;
`
const PriceAndQuantContainer = styled.div`
  display:flex;
  justify-content: space-between;
  padding: .2rem;
  border-top: 1px solid gray; 
  @media (max-width: 432px) {
    width: 9rem; 
  }
`
const CartQuantity = styled.p`
  height: 100%;
`
const ButtonAndQuantContainer = styled.div`
  display: flex;
  width: 6rem;
  justify-content: space-between;
  
  @media (max-width: 800px) {
    width: 6rem;  
    padding: 0 4px ;
  }

`