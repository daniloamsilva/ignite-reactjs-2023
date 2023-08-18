import { createContext, useReducer } from 'react'

import { CartCoffee, CartReducer } from '../reducers/cart/reducer'
import {
  incrementCoffeeToCartAction,
  decrementCoffeeToCartAction,
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
} from '../reducers/cart/actions'
import { Coffee, coffees } from '../coffees'

interface CartContextData {
  cart: CartCoffee[]
  incrementCoffeeToCart: (id: number) => void
  decrementCoffeToCart: (id: number) => void
  addCoffeeToCart: (id: number, quantity: number) => void
  removeCoffeeFromCart: (id: number) => void
  getCoffeeById: (id: number) => Coffee | undefined
  getTotalPrice: () => number
}

interface CartContextProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartCoffees, dispatch] = useReducer(CartReducer, [])

  function incrementCoffeeToCart(id: number) {
    dispatch(incrementCoffeeToCartAction(id))
  }

  function decrementCoffeToCart(id: number) {
    dispatch(decrementCoffeeToCartAction(id))
  }

  function addCoffeeToCart(id: number, quantity: number) {
    dispatch(addCoffeeToCartAction(id, quantity))
  }

  function removeCoffeeFromCart(id: number) {
    dispatch(removeCoffeeFromCartAction(id))
  }

  function getCoffeeById(id: number) {
    return coffees.find((coffee) => coffee.id === id)
  }

  function getTotalPrice() {
    return cartCoffees.reduce((total, cartCoffee) => {
      const coffee = getCoffeeById(cartCoffee.id)
      return coffee ? total + coffee?.price * cartCoffee.quantity : total
    }, 0)
  }

  const initialValue = {
    cart: cartCoffees,
    incrementCoffeeToCart,
    decrementCoffeToCart,
    addCoffeeToCart,
    removeCoffeeFromCart,
    getCoffeeById,
    getTotalPrice,
  }

  return (
    <CartContext.Provider value={initialValue}>{children}</CartContext.Provider>
  )
}
