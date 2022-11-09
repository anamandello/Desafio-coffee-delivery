import { CoffeeMenu, ContainerCards, ContainerHome, ContainerMain } from "./styles";
import CoffeeMain from '../../assets/CoffeeMain.svg'
import { IconsHome } from "./components/IconsHome";
import { CoffeeInfoCard } from '../../datas/CardDatas'
import { CardCoffee } from "./components/CardCoffee";

export function Home(){
  return(
    <ContainerHome>
      <ContainerMain>
        <main>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </div>
          <IconsHome />
        </main>
        <div>
          <img src={CoffeeMain} alt="" />
        </div>
      </ContainerMain>

    <h2>Nossos cafés</h2>
    
    <ContainerCards>
      {CoffeeInfoCard.map(item => {
        return (
          <CoffeeMenu key={item.id}>
            <CardCoffee item={item}/>
          </CoffeeMenu>
        )
        })}
    </ContainerCards>
    </ContainerHome>
  )
}