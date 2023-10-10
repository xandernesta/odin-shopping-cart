import { useState , useContext } from 'react'
import styled from 'styled-components'
import {StyledButton} from '../Button/Button'
import {useCart,  useCartDispatch, } from '../../context/CartContext'

export const ProductCard = ({id, title, price, img, showOrCloseCart}) => {
    const product = { "id":{id}, "img":{img}, "title":{title}, "price":{price} }
    const dispatch = useCartDispatch();
    return(
        <CardWrapper>
            <ImageContainer>
                <Image 
                    src={img} 
                    alt={title}
                />
            </ImageContainer>
            <Details>
                <Info>
                    <Title>{title}</Title>
                    <Price>${price.toFixed(2)}</Price>
                </Info>
                <CartButton onClick={() => {                    
                    showOrCloseCart()
                    dispatch({
                            type: 'added',
                            id: id,
                            title: title,
                            price: price,
                            image: img,
                        }) 
                    }}>Add to Cart</CartButton>
            </Details>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid var(--light-font-color);
    border-radius: 10px;
    background-color: white;
    color: var(--dark-font-color);
    font-size: 1rem;
    box-shadow: 0px 0px 6px 4px rgba(0,0,0,.15);
    margin: 1rem 0;
    width: 85%;
    @media (max-width: 794px) {
        width: 20rem;
    }
    @media (max-width: 669px) {
        width: 16rem;
    }
    @media (max-width: 480px) {
        width: 16rem;
    }
`
const ImageContainer = styled.div`
  height: 16rem;
  padding: 2rem;
  margin: 0 auto;

  @media (max-height: 832px) {
    height: 10rem;
    padding: .5rem;
    margin: 0 auto;
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
  padding: 1rem;

  @media (max-height: 832px) {
    gap: .5rem;
    padding: .5rem;
    
  }
`  
const Image = styled.img`
    height: 100%;
    background-color: var(--light-font-color) ;
    color: var(--light-font-color);
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: .25rem;
    height: 100%;
`
const Title = styled.div`
    font-family: 'Poppins';
    font-weight: bold;
    margin: 0 1rem;
`
const Price = styled.div`
    text-align: center;
    font-size: 1.1rem;
`
const CartButton = styled(StyledButton)`
    font-family: 'Poppins';
    font-size: 1rem;
    background-color: var(--footer-background-color);
    align-self: center;
    width: 10rem;
    &:hover {
        background-color: rgb(2, 2, 75);
        border: 3px solid transparent;
    }
`