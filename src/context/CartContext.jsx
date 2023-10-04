import { createContext, useContext, useState, useReducer } from 'react'

export const CartContext = createContext({ cart: []}) //initial context cart: [],showCart: true,toggleShowCart: () => {}
export const CartDispatchContext = createContext(null)


export function CartProvider ({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart)
  const [showCart, setShowCart] = useState(true)
  const toggleShowCart = () => {
    setShowCart(!showCart)
    console.log(showCart) 
    /* if (showCart===true) {setShowCart(false)}
    else {setShowCart(true)} */
  } 
  const providerVals = {
    cart,
    showCart,
    toggleShowCart
  }
  return (
    <CartContext.Provider value={providerVals}>
      <CartDispatchContext.Provider value={dispatch}>
          {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

//create useCart and useCartDispatch functions which are Custom Hooks like the best buy guy does

export function useCart () {
  return useContext(CartContext)
}

export function useCartDispatch () {
  return useContext(CartDispatchContext)
}


function cartReducer (cart, action) {
  switch (action.type) {
    case 'added': {
      let itemInCart = cart.find(cartItem => cartItem.id === action.id)
      // if itemInCart is true (exists in the cart) then map quantity+1 as a new quantity to the existing carItem.id that matches the action.id
      return itemInCart
        ? cart.map(cartItem =>
            cartItem.id === action.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [
            ...cart,
            {
              id: action.id,
              title: action.title,
              price: action.price,
              image: action.image,
              quantity: 1
            }
          ]
    }
    case 'removed': {
      let itemInCart = cart.find(cartItem => cartItem.id === action.id)
      if(itemInCart.quantity > 1) {
        return cart.map(cartItem =>
          cartItem.id === action.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem)
        }
      else
      return cart.filter(i => i.id !== action.id)
    }
  }
}

/* function showCartReducer(showCart, action){
  switch (action.type){
    case 'show': {
      return showCart;
    }
    case 'hide': {
      return !showCart;
    }
    default: {
      throw Error('Uknown action: ' + action.type)
    }
  }
} */

const initialCart = [
  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
    price: 64,
    description:
      'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    quantity: 1
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    price: 109,
    description:
      'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    quantity: 2
  }
]

/* const initialState = true; */