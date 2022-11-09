import { createContext, ReactNode, useEffect, useReducer } from "react"
import { updateValorCartAction, removeItemAction, addItemAction, plusItemCartAction, minusItemCartAction, resetCartAction } from "../reducers/listCart/actions"
import { ItemListCart, listCartReducer } from "../reducers/listCart/reducer"

interface ListCartContextType{
  items: ItemListCart[]
  totalPrice: number
  totalAmount: number
  addItemListCart: (newItem: ItemListCart) => void
  removeItemListCart: (id: number) => void
  plusItemCart: (id: number) => void
  minusItemCart: (id: number) => void
  resetCart: () => void
}
 
export const ListCartContext = createContext({} as ListCartContextType)

interface ListCartContextProps{
  children: ReactNode
}

export function ListCartContextProvider(
  {children}: ListCartContextProps
){
  const [listCartState, dispatch] = useReducer(
    listCartReducer,
    {
      items: [],
      totalPrice: 0,
      totalAmount: 0
    },
    () => {
      const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')
      console.log(storedStateAsJSON)

      if(storedStateAsJSON){
        return JSON.parse(storedStateAsJSON)
      }

      return {
        items: [],
        totalPrice: 0,
        totalAmount: 0
      }
    }
  )
  
  useEffect(() => {
    const stateJSON = JSON.stringify(listCartState)
    
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [listCartState])
  
  const { items, totalPrice, totalAmount } = listCartState
  
  useEffect(() => {
    dispatch(updateValorCartAction())
  }, [items])

  function addItemListCart(newItem: ItemListCart) {
    dispatch(addItemAction(newItem))
  }

  function removeItemListCart(id: number) {
    dispatch(removeItemAction(id))
  }

  function plusItemCart(id: number){
    dispatch(plusItemCartAction(id))
  }

  function minusItemCart(id: number){
    dispatch(minusItemCartAction(id))
  }
  
  function resetCart(){
    dispatch(resetCartAction())
  }

  return(
    <ListCartContext.Provider
      value={{items, totalPrice, totalAmount, addItemListCart, removeItemListCart, plusItemCart, minusItemCart, resetCart}}
    >
      {children}
    </ListCartContext.Provider>
  )
}