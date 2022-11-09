import { useContext } from "react";
import { ListCartContext } from "../../../../contexts/ListCartContext";
import { Coffee } from "../Coffee";
import { Finish, ItemsCart, TextPrice} from "./styles";

export function InfoCart() {
  const { items, totalPrice } = useContext(ListCartContext)

  return(
    <ItemsCart>
      <div>
        {items.length > 0 && 
          items.map(item => (
            <Coffee key={item.item.id} item={item.item} priceTotalItem={item.priceTotalItem} amount={item.amount}/>
          ))
        }
      </div>
      <div>
        <TextPrice><p>Total de Items</p><span>R${totalPrice.toFixed(2)}</span></TextPrice>
        <TextPrice><p>Entrega</p><span>R$ 3,50</span></TextPrice>
        <TextPrice><p>Total</p><span>R${totalPrice.toFixed(2)}</span></TextPrice>
      </div>
      <Finish type="submit">Confirmar Pedido</Finish>
    </ItemsCart>
  )
}