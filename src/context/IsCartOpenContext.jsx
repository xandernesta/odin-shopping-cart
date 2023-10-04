import { createContext, useContext, useState, useReducer, useMemo } from 'react'

const IsCartOpenContext = createContext()

export function IsCartOpenProvider({ children }, props){
    const [showCart, setShowCart] = useState(false)
    const value = useMemo(()=> [showCart, setShowCart], [showCart])
    return <IsCartOpenContext.Provider value={value} {...props}>
                {children}
            </IsCartOpenContext.Provider>
}

export function useIsCartOpen() {
    const context = useContext(IsCartOpenContext)
    if(!context){
        throw new Error(`useIsCartOpen must beused within a Provider`)
    }
    return context
}
/* export function useToggle () {
    const context = useContext(IsCartOpenContext)
    if (!context) {
      throw new Error(`useToggle must be used within a IsCartOpenProvider`)
    }
    const [state, setState] = context
    const toggleState = () => {
      setState(!state)
      console.log(state)
    }
    return {
      state,
      toggleState
    }
} */

