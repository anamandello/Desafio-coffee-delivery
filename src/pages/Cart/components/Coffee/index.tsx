import { Minus, Plus, Trash } from "phosphor-react"
import { FormEvent, useContext } from "react"
import { TypeItem } from "../../../../@types/typeItem"
import { ListCartContext } from "../../../../contexts/ListCartContext"
import { ButtonCounter, ButtonRemove, CoffeeContainer, CoffeeDivider, CoffeeDatas, CoffeeInfo, CoffeePrice, Counter, ContainerCounter, TextCounter } from "./styles"

interface CoffeeProps{
    item: TypeItem,
    amount: number,
    priceTotalItem: number
}

export function Coffee({item, amount, priceTotalItem} : CoffeeProps){
  const { plusItemCart, minusItemCart, removeItemListCart } = useContext(ListCartContext)

  function handleMinusCoffee(event: FormEvent){
    event.preventDefault()
    minusItemCart(item.id)
  }

  function handlePlusCoffee(event: FormEvent){
    event.preventDefault()
    plusItemCart(item.id)
  }

  function handleRemoveCoffee(event: FormEvent){
    event.preventDefault()
    removeItemListCart(item.id)
  }

  return (
    <>
      <CoffeeContainer>
        <CoffeeDatas>
          <img src={item.image} />
          <CoffeeInfo>
            <span>{item.name}</span>
            <ContainerCounter>
              <Counter>
                <ButtonCounter onClick={handleMinusCoffee}><Minus size={14}/></ButtonCounter>
                  <TextCounter value={amount} readOnly disabled/>
                <ButtonCounter onClick={handlePlusCoffee}><Plus size={14}/></ButtonCounter>
              </Counter>
              <ButtonRemove onClick={handleRemoveCoffee}><Trash size={16}/><span>Remover</span></ButtonRemove>
            </ContainerCounter>
          </CoffeeInfo>
        </CoffeeDatas>
        <CoffeePrice>
          <span>R${priceTotalItem.toFixed(2)}</span>
        </CoffeePrice>

      </CoffeeContainer>
      <CoffeeDivider></CoffeeDivider>
    </>
  )
}