import { CartContainer, HeaderContainer, HeaderContainerFixed, LocalizationContainer, LogoContainer } from "./styles";
import LogoCoffeeDelivery from '../../assets/LogoCoffeeDelivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react';
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ListCartContext } from "../../contexts/ListCartContext";

export function Header(){
  const { totalAmount } = useContext(ListCartContext)

  return (
    <HeaderContainerFixed>
      <HeaderContainer>
        <LogoContainer>
          <Link to={'/'}>
            <img src={LogoCoffeeDelivery} alt="" />
          </Link>
        </LogoContainer>
        <nav>
          <LocalizationContainer>
            <NavLink to={'/'}>
                <MapPin size={22} weight='fill'/>
                <p>Porto Alegre, RS</p>
            </NavLink>
          </LocalizationContainer>
          <CartContainer text={totalAmount}>
            <NavLink to={'/cart'}>
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
          </CartContainer>
        </nav>
      </HeaderContainer>
    </HeaderContainerFixed>
  )
}