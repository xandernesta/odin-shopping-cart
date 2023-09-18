import { useState } from 'react'
import styled from 'styled-components'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { ItemCard } from '../ItemCard/ItemCard'

export const Products = () => {
  const items = [
    {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
      "id": 10,
      "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "price": 109,
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
      "id": 11,
      "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "price": 109,
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
      "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    },
    {
      "id": 12,
      "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "price": 114,
      "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    },
    {
      "id": 13,
      "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "price": 599,
      "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    },
  ]
    const itemCards = items.map((item)=>(
      <ItemCard 
        id={item.id}
        title={item.title}
        price={item.price}
        img={item.image}
      />))
  return (
    <MainWrapper>
      <Header></Header>
      <ItemsWrapper>
        {itemCards}
      </ItemsWrapper>  
      <Footer></Footer>
    </MainWrapper>
  )
}
const MainWrapper = styled.div`
/*   display: flex;
  flex-direction: column; */

`
const ItemsWrapper = styled.div`
  position: absolute;
  top: 13vh;
  margin-bottom: 1rem;
  margin-left: 6rem;
  padding-right: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;
  gap: .25rem;
  height: 83vh;
  overflow-y: scroll;
  flex: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(20rem, 36rem));
    justify-content: center;
    top: 28vh;
    gap: 1rem;
    margin-left: .5rem;
    row-gap: .1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 36rem);
    top: 38vh;
    margin-left: .5rem;
    height: 60vh;
  }

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
