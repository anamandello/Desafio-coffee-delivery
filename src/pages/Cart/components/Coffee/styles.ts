import styled from "styled-components";

export const CoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const CoffeeDivider = styled.div`
  border-top: 1px solid ${props => props.theme['base-button']};
  margin: 1.5rem 0;
`

export const CoffeeDatas = styled.div`
  display: flex;
  gap: 1.125rem;

  img{
    width: 4rem;
  }

  @media (min-width: 0) and (max-width: 420px){
    img{
      width: 2rem;
    }
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span{
    font-size: 1rem;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const ContainerCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  max-height: 2rem;

  svg{
    color: ${props => props.theme['purple']}
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme['base-button']};
  border-radius: 6px;
  width: 4.8rem;
  height: 2rem;

  svg{
    color: ${props => props.theme['purple']}
  }
`

export const TextCounter = styled.input`
    font-size: 1rem;
    color: ${props => props.theme['base-title']};
    text-align: center;
    background: transparent;
    width: 100%;
`

export const ButtonCounter = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: transparent;
  width: 80%;
  height: 100%;
  padding: 0;

  &:hover{
    color: ${props => props.theme['purple-dark']};
    background-color: ${props => props.theme['base-hover']};
  }
`

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: ${props => props.theme['base-button']};
  padding: 0.4rem;
  gap: 0.25rem;

  &:hover{
    color: ${props => props.theme['purple-dark']};
    background-color: ${props => props.theme['base-hover']};
  }
`

export const CoffeePrice = styled.button`
  span{
    font-size: 1rem;
    font-weight: bold;
  }
`