import { Bank, CreditCard, CurrencyDollar, Money} from "phosphor-react";
import { Icons, IconsHeader } from "../Helpers/styles";
import { useFormContext } from 'react-hook-form'
import { Method, MethodsContainer, PaymentMethods } from "./styles";
import { useState } from "react";

export function MethodPayment(){
  const { register } = useFormContext()

  const [select, setSelect] = useState("");

  return(
    <PaymentMethods>
      <IconsHeader>
        <Icons statusColor="purple">
          <CurrencyDollar size={22}/>
        </Icons>
        <div>
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </IconsHeader>
      <MethodsContainer>
        <Method onClick={() => setSelect('Cartão de crédito')} status={select === 'Cartão de crédito' ? 'enable' : 'disable'}>
          <CreditCard size={22}/>
          <span>Cartão de crédito</span>
          <input type='radio' value="Cartão de crédito" id="CartaoDeCredito" {...register('typePayment')}/>
        </Method>
        <Method onClick={() => setSelect('Cartão de débito')} status={select === 'Cartão de débito' ? 'enable' : 'disable'}>
          <Bank size={22}/>
          <span>Cartão de débito</span>
          <input type='radio' value="Cartão de débito" {...register('typePayment')}/> 
        </Method>
        <Method onClick={() => setSelect('Dinheiro')} status={select === 'Dinheiro' ? 'enable' : 'disable'}>
          <Money size={22}/>
          <span>Dinheiro</span>
          <input type='radio' value="Dinheiro" {...register('typePayment')}/>
        </Method>
      </MethodsContainer>
    </PaymentMethods>
  )
}
