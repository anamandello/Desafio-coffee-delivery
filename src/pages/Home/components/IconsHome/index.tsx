import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { ColorIcon, Icons } from "./styles";

export function IconsHome(){
  return(
    <Icons>
          <div>
            <ColorIcon statusColor='yellowDark'>
              <ShoppingCart size={16} weight={"fill"}/>
            </ColorIcon>
            <span>Compra simples e segura</span>
          </div>
          <div>
            <ColorIcon statusColor='baseText'>
              <Package size={16} weight="fill" />
            </ColorIcon>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <ColorIcon statusColor='yellow'>
              <Timer size={16} weight="fill" />
            </ColorIcon>
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <ColorIcon statusColor='purple'>
              <Coffee size={16} weight="fill" />
            </ColorIcon>
            <span>O café chega fresquinho até você</span>
          </div>
        </Icons>
  )
}