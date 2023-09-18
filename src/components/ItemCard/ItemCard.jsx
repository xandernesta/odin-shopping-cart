import styled from 'styled-components'
import {StyledButton} from '../Button/Button'

export const ItemCard = ({id, img, title, price}) => {
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
                <CartButton>Add to Cart</CartButton>
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
    margin: 1rem;
    width: 80%;
    @media (max-width: 768px) {
        width: 20rem;
    }
    @media (max-width: 480px) {
        width: 20rem;
    }
`
const ImageContainer = styled.div`
  height: 16rem;
  padding: 2rem;
  margin: 0 auto;
  
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
  padding: 1rem;
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