import { DatasPayment } from "./components/DatasPayment";
import { InfoCart } from "./components/InfoCart/ItemsCart";
import { MethodPayment } from "./components/MethodPayment";
import { CartCoffee, CartContainer, CartDatas, Datas,} from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import * as zod from 'zod'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ListCartContext } from "../../contexts/ListCartContext";

const newRequestFormValidationSchema = zod.object({
  cep: zod.string().length(8, 'CEP deve ter 8 dígitos'),
  rua: zod.string().min(4, 'Mínimo de 4 dígitos').max(50, 'Máximo 50 de dígitos'),
  numero: zod.string().min(1, 'Digite o número').max(10, 'Máximo 10 dígitos'),
  complemento: zod.string().min(3, 'Mínimo 3 dígitos').max(15, 'Máximo 15 dígitos'),
  bairro: zod.string().min(3, 'Mínimo 3 dígitos').max(30, 'Máximo 30 dígitos'),
  cidade: zod.string().min(3, 'Mínimo 3 dígitos').max(50, 'Máximo 50 dígitos'),
  uf: zod.string().length(2, '2 dígitos'),
  typePayment: zod.string().min(1)
})

type NewRequestFormData = zod.infer<typeof newRequestFormValidationSchema>

export function Cart(){
  const { resetCart } = useContext(ListCartContext)

  const newRequestForm = useForm<NewRequestFormData>({
    resolver: zodResolver(newRequestFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      typePayment: ''
    }
  })

  function handleCreateRequest(data: NewRequestFormData){
    reset()
    resetCart()
    navigate('/success', {state: data})
  }
  
  const { handleSubmit, reset, formState: { errors } } = newRequestForm
  const navigate = useNavigate();

  return(
    <CartContainer onSubmit={handleSubmit(handleCreateRequest)} action="">
      <CartDatas>
        <h2>Complete seu pedido</h2>
        <Datas>
          <FormProvider {...newRequestForm}>
            <DatasPayment /> 
            <MethodPayment />
          </FormProvider>
        </Datas>
      </CartDatas>
      <CartCoffee>
        <h2>Cafés selecionados</h2>
        <InfoCart/>
      </CartCoffee>
    </CartContainer>
  )
}