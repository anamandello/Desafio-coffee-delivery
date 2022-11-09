import { createContext, ReactNode, useEffect, useReducer } from "react"
import { TypeItem } from "../@types/typeItem"
import { updateValorCartAction, removeItemAction, addItemAction, plusItemCartAction, minusItemCartAction, resetCartAction } from "../reducers/listCart/actions"
import { listCartReducer } from "../reducers/listCart/reducer"

interface itemListCart{
  item: TypeItem,
  amount: number,
  priceTotalItem: number
}

interface listCartContextType{
  items: itemListCart[],
  totalPrice: number,
  totalAmount: number,
  addItemListCart: (newItem: itemListCart) => void,
  removeItemListCart: (id: number) => void,
  plusItemCart: (id: number) => void,
  minusItemCart: (id: number) => void,
  resetCart: () => void,
}
 
export const ListCartContext = createContext({} as listCartContextType)

interface listCartContextProps{
  children: ReactNode
}

export function ListCartContextProvider(
  {children}: listCartContextProps
){
  const [listCartState, dispatch] = useReducer(
    listCartReducer,
    {
      items: [],
      totalPrice: 0,
      totalAmount: 0
    }
  )

  const { items, totalPrice, totalAmount } = listCartState

  useEffect(() => {
    dispatch(updateValorCartAction())
  }, [items])

  
  function addItemListCart(newItem: itemListCart) {
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