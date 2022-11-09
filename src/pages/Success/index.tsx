import { Border, DeliveryDatas, Icons, InfoDatas, Infos, SuccessContainer, Texts } from "./styles";
import SuccessCart from '../../assets/SuccessCart.png'
import { CurrencyDollarSimple, MapPin, Timer } from "phosphor-react";
import { useLocation } from "react-router-dom";

export function Success(){
  const {state:data} = useLocation();

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <InfoDatas>
        <Border>
          <DeliveryDatas>
            <Infos>
              <Icons statusColor="purple">
                <MapPin weight="fill" size={16}/>
              </Icons>
              <Texts>
                <p>Entrega em <strong>{data.rua}, {data.numero}</strong></p>
                <p>{data.bairro} - {data.cidade}, {data.uf}</p>
              </Texts>
            </Infos>
            <Infos>
              <Icons statusColor="yellow">
                <Timer weight="fill" size={16}/>
              </Icons>
              <Texts>
                <p>Previsão de entrega</p>
                <p><strong>20 min - 30 min </strong></p>
              </Texts>
            </Infos>
            <Infos>
              <Icons statusColor="yellowDark">
                <CurrencyDollarSimple weight="fill" size={16}/>
              </Icons>
              <Texts>
                <p>Pagamento na entrega</p>
                <p><strong>{data.typePayment}</strong></p>
              </Texts>
            </Infos>
          </DeliveryDatas>
        </Border>
        <img src={SuccessCart} alt="" />
      </InfoDatas>
    </SuccessContainer>
  )
}