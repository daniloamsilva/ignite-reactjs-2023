import { createContext, useReducer } from 'react'

import { CartCoffee, CartReducer } from '../reducers/cart/reducer'
import {
  incrementCoffeeToCartAction,
  decrementCoffeeToCartAction,
  removeCoffeeFromCartAction,
} from '../reducers/cart/actions'
import { coffees } from '../coffees'

interface CartContextData {
  cart: CartCoffee[]
  incrementCoffeeToCart: (id: number) => void
  decrementCoffeToCart: (id: number) => void
  removeCoffeeFromCart: (id: number) => void
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
    removeCoffeeFromCart,
    getTotalPrice,
  }

  return (
    <CartContext.Provider value={initialValue}>{children}</CartContext.Provider>
  )
}
