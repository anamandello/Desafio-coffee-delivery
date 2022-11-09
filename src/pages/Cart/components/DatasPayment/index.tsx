import { MapPin } from "phosphor-react";
import { Icons, IconsHeader } from "../Helpers/styles";
import { useFormContext } from 'react-hook-form'
import { Address, AddressDatas} from "./styles";

export function DatasPayment (){
  const { register, formState: { errors } } = useFormContext()

  return(
    <Address>
      <IconsHeader>
        <Icons statusColor="yellow">
          <MapPin size={22}/>
        </Icons>
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </IconsHeader>
      <AddressDatas>
        <div id="cep">
          <input type="text" placeholder="CEP" {...register('cep')}/>
          <p>{errors.cep?.message && errors.cep.message.toString()}</p>
        </div>
        <div id='rua'>
          <input type="text" placeholder="Rua" {...register('rua')}/>
          {errors.rua?.message && <p>{errors.rua.message.toString()}</p>}
        </div>
        <div id="numero">
          <input type="text" placeholder="Número" {...register('numero')}/>
          {errors.numero?.message && <p>{errors.numero.message.toString()}</p>}
        </div>
        <div id="complemento">
          <input type="text" placeholder="Complemento" {...register('complemento')}/>
          {errors.complemento?.message && <p>{errors.complemento.message.toString()}</p>}
        </div>
        <div id="bairro">
          <input type="text" placeholder="Bairro" {...register('bairro')}/>
          {errors.bairro?.message && <p>{errors.bairro.message.toString()}</p>}
        </div>
        <div id="cidade">
          <input type="text" placeholder="Cidade" {...register('cidade')}/>
          {errors.cidade?.message && <p>{errors.cidade.message.toString()}</p>}
        </div>
        <div id="uf">
          <input type="text" placeholder="UF" {...register('uf')}/>
          {errors.uf?.message && <p>{errors.uf.message.toString()}</p>}
        </div>
      </AddressDatas>
    </Address>
  )
}