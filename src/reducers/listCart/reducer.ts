import { TypeItem } from "../../@types/typeItem"

export interface itemListCart{
  item: TypeItem,
  amount: number,
  priceTotalItem: number
}

interface listCartContextType{
  items: itemListCart[],
  totalPrice: number,
  totalAmount: number
}

export function listCartReducer(state:listCartContextType, action: any) {
  switch(action.type){
    case 'add_item_list':
      if(state.items.length === 0){
          return {...state,
            items: [...state.items, action.payload.newItem]
          }
         }
      else{
        const itemRepetido = state.items.findIndex((item => item.item.id === action.payload.newItem.item.id))
          if(itemRepetido >= 0){
            return {
              ...state,
              items: state.items.map(item => {
                if(item.item.id === action.payload.newItem.item.id)
                 return { ...item, 
                  quantidade: item.amount + action.payload.newItem.quantidade,
                  priceTotalItem: item.priceTotalItem + action.payload.newItem.priceTotalItem
                }
                else
                  return item
              })
            }
          }
          else{
            return {...state,
            items: [...state.items, action.payload.newItem]
          }
        }
      }
    case 'remove_item_list':
      return {...state,
        items: state.items.filter(item => {
          if(item.item.id != action.payload.id){
             return item
          }
        })
      }
    case 'plus_item_list':
      return {...state,
        items: state.items.map(item => {
          if(item.item.id === action.payload.id && item.amount < 99){
            const newAmount = item.amount + 1
            const newPrice = item.item.price * newAmount
            return {...item, priceTotalItem: newPrice, amount: newAmount}
          }
          return item
        })
      }
    case 'minus_item_list':
      return {...state,
        items: state.items.map(item => {
          if(item.item.id === action.payload.id && item.amount > 1){
            const newAmount = item.amount - 1
            const newPrice = item.item.price * newAmount
            return {...item, priceTotalItem: newPrice, amount: newAmount}
          }
          return item
        })
      }
    case 'update_valor_cart':
      return {
        ...state,
        totalPrice: state.items.reduce((total, item: itemListCart) => {
          return total + item.priceTotalItem
        }, 0),
        totalAmount: state.items.reduce((total, item: itemListCart) => {
          return total + item.amount
        }, 0),
      }
    case 'reset_cart':
      return {
        items: [],
        totalPrice: 0,
        totalAmount: 0
      }
    default:
      return state
  }
}