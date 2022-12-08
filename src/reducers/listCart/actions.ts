import { ItemListCart } from "./reducer";

export enum ActionsType{
  addItemList = 'add_item_list',
  removeItemList = 'remove_item_list',
  plusItemList = 'plus_item_list',
  minusItemList = 'minus_item_list',
  updateValorCart = 'update_valor_cart',
  resetCart = 'reset_cart'
}

export function addItemAction(newItem: ItemListCart){
  return {
    type: ActionsType.addItemList,
    payload: {
      newItem
    }
  }
}

export function removeItemAction(id: number){
  return {
    type: ActionsType.removeItemList,
    payload: {
      id
    }
  }
}

export function plusItemCartAction(id: number){
  return {
    type: ActionsType.plusItemList,
    payload: {
      id
    }
  }
}

export function minusItemCartAction(id: number){
  return {
    type: ActionsType.minusItemList,
    payload: {
      id
    }
  }
}

export function updateValorCartAction(){
  return {
    type: ActionsType.updateValorCart,
  }
}

export function resetCartAction(){
  return {
    type: ActionsType.resetCart,
  }
}