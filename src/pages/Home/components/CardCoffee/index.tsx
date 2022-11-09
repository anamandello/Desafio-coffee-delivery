import { TypeItem } from "../../../../@types/typeItem";
import { Counter } from "./Counter";
import { ContainerCard, DescriptionCoffe, NameCoffee, TypesCoffee } from "./styles";

interface CardCoffeeProps {
  item: TypeItem
}

export function CardCoffee({ item } : CardCoffeeProps){
  return (
    <ContainerCard>
      <img src={item.image} />

      <TypesCoffee>
        {item.type.map((coffeType, index) => ( 
          <span key={index}>
            {coffeType.toUpperCase()}
          </span>
        ))}
      </TypesCoffee>
      
      <NameCoffee>{item.name}</NameCoffee>
      <DescriptionCoffe>{item.description}</DescriptionCoffe>

      <Counter item={item}/>
    </ContainerCard>
  )
}