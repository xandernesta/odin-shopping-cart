import { useState , useContext, useEffect } from 'react'
import styled from 'styled-components'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { ProductCard } from '../ProductCard/ProductCard'
import { Cart } from '../Cart/Cart'
import {CartProvider} from '../../context/CartContext'
import { useFetch } from '../../hooks/useFetch'


export const Products = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  function showOrCloseCart(){
    setIsCartOpen(!isCartOpen)
  }

const [loadingProducts, error, productsData, anticipateFetch] = useFetch('https://fakestoreapi.com/products/category/electronics',[]) 


function filterData(productsData){
  const filteredData = productsData.map(
    (product) => {
    return {"id": product.id, "title":product.title, "price":product.price, "image":product.image}
  })
  return filteredData
}

  let productCards = {};
  if (productsData) {
    productCards = filterData(productsData).map(product => (
      <ProductCard
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        img={product.image}
        showOrCloseCart={showOrCloseCart}
      />
    )) 
  }
  else {
    productCards = <div>No Products</div>;
  }
  
  if(loadingProducts){
    return (
      <MainWrapper>
        <Header showOrCloseCart={showOrCloseCart}></Header>
        <Loader className="loader">Loading Products...</Loader>
        <Footer></Footer>
        </MainWrapper>
    )
  }
  return (
      <MainWrapper>
        <CartProvider>
            <Header showOrCloseCart={showOrCloseCart}></Header>
            { error 
              ? <Loader className="loader">Error Loading Products</Loader>  
              : <ProductsWrapper>{productCards}</ProductsWrapper>
            } 
            <Footer></Footer>
            {isCartOpen ? <Cart iscartopen={isCartOpen} showOrCloseCart={showOrCloseCart}/>
              : null
            }
        </CartProvider>
      </MainWrapper>
  )
}
const MainWrapper = styled.div`
 
`
const ProductsWrapper = styled.div`
  position: fixed;
  top: 13vh;
  margin-bottom: 1rem;
  margin-left: 6rem;
  padding-right: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;
  gap: 0.25rem;
  height: 83vh;
  overflow-y: scroll;
  flex: auto;
  backdrop-filter: blur(24px);

  @media (max-width: 1054px) {
    grid-template-columns: repeat(2, minmax(14rem, 30rem));
    justify-content: center;
    top: 14vh;
  }

  @media (max-width: 794px) {
    grid-template-columns: repeat(2, minmax(20rem, 36rem));
    justify-content: center;
    top: 24vh;
    gap: 1rem;
    margin-left: 0.5rem;
    row-gap: 0.1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 36rem);
    top: 38vh;
    margin-left: 0.5rem;
    height: 60vh;
  }

  animation: fadeIn ease .8s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const Loader = styled.div`
  align-content: center;
  justify-items: center;
  position: fixed;
  top: 45%;
  left: 40%;
`
