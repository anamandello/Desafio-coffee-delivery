import Expresso from '../../assets/Coffee/Expresso.svg'
import Americano from '../../assets/Coffee/Americano.svg'
import Arabe from '../../assets/Coffee/Arabe.svg'
import CafeComLeite from '../../assets/Coffee/CafeComLeite.svg'
import CafeGelado from '../../assets/Coffee/CafeGelado.svg'
import Capuccino from '../../assets/Coffee/Capuccino.svg'
import ChocolateQuente from '../../assets/Coffee/ChocolateQuente.svg'
import Cubano from '../../assets/Coffee/Cubano.svg'
import ExpressoCremoso from '../../assets/Coffee/ExpressoCremoso.svg'
import Havaiano from '../../assets/Coffee/Havaiano.svg'
import Irlandes from '../../assets/Coffee/Irlandes.svg'
import Latte from '../../assets/Coffee/Latte.svg'
import Macchiato from '../../assets/Coffee/Macchiato.svg'
import Mochaccino from '../../assets/Coffee/Mochaccino.svg'

export const CoffeeInfoCard = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    type: ['Tradicional'],
    image: Expresso
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    type: ['Tradicional'],
    image: Americano
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    type: ['Tradicional'],
    image: ExpressoCremoso
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    type: ['Tradicional', 'Gelado'],
    image: CafeGelado
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    type: ['Tradicional', 'Com leite'],
    image: CafeComLeite
  },
  {
    id: 6,
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    type: ['Tradicional', 'Com leite'],
    image: Latte
  },
  {
    id: 7,
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    type: ['Tradicional', 'Com leite'],
    image: Capuccino
  },
  {
    id: 8,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    type: ['Tradicional', 'Com leite'],
    image: Macchiato
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    type: ['Tradicional', 'Com leite'],
    image: Mochaccino
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    type: ['Especial', 'Com leite'],
    image: ChocolateQuente
  },
  {
    id: 11,
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    type: ['Especial', 'Alcoólico', 'Gelado'],
    image: Cubano
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    type: ['Especial'],
    image: Havaiano
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    type: ['Especial'],
    image: Arabe
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    type: ['Especial', 'Alcoólico'],
    image: Irlandes
  },
]