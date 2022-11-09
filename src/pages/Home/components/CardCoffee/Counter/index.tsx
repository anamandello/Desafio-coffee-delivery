import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { InfoCoffee, PriceCoffe, Amount, CounterItem, TextCounter } from "./styles";
import { TypeItem } from "../../../../../@types/typeItem";
import { ListCartContext } from "../../../../../contexts/ListCartContext";

interface CoffeeProps {
  item: TypeItem
}

export function Counter({ item } : CoffeeProps){
  const { addItemListCart } = useContext(ListCartContext)

  const [amountOfCoffe, setAmountOfCoffee] = useState(1)

  function handleAddItemCart(event: FormEvent){
    event.preventDefault()  
    const addItem = {
      item,
      amount: amountOfCoffe,
      priceTotalItem: amountOfCoffe * item.price
    }
    setAmountOfCoffee(1)
    addItemListCart(addItem)         
  }

  function handleOnChangeValue(event: ChangeEvent<HTMLInputElement>){
    if((event.target.value).length < 3)
      setAmountOfCoffee(parseInt(event.target.value))
    if(parseInt(event.target.value) === 0)
      setAmountOfCoffee(1)
  }

  function handlerIncrementAmountOfCoffee(event: FormEvent){
    event.preventDefault()
    if(amountOfCoffe < 99)
      setAmountOfCoffee(amountOfCoffe + 1)
  }
  function handlerDecreaseAmountOfCoffee(event: FormEvent){
    event.preventDefault()
    if(amountOfCoffe > 1)
      setAmountOfCoffee(amountOfCoffe - 1)
  }

  function emptyInput(event: ChangeEvent<HTMLInputElement>){
    if(event.target.value === '')
      setAmountOfCoffee(1)
  }

  return (
    <InfoCoffee>
        <PriceCoffe>
          <p>RS <span>{item.price.toFixed(2)}</span></p>
        </PriceCoffe>
        <form onSubmit={handleAddItemCart}>
          <Amount>
            <CounterItem onClick={handlerDecreaseAmountOfCoffee}>
              <Minus size={12} weight="bold" />
            </CounterItem>
            <TextCounter type={'number'} min={1} max={99} value={amountOfCoffe} onChange={handleOnChangeValue} onBlur={emptyInput} />
            <CounterItem onClick={handlerIncrementAmountOfCoffee}>
              <Plus size={12} weight="bold" /> 
            </CounterItem>
          </Amount>
          <button type="submit">
            <ShoppingCartSimple size={22} weight="fill" /> 
          </button>
        </form>
    </InfoCoffee>
  )
}