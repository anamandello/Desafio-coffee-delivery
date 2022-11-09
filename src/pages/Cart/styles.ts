import styled from "styled-components";

export const CartContainer = styled.form`
  max-width: 1440px;
  padding: 0 10rem;
  margin: auto;
  margin-top: 5rem;
  gap: 2rem;

  display: flex;
  justify-content: space-between;

  h2{
    font-size: 1.125rem;
    font-family: 'Baloo 2';
    font-weight: bold;
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }

  @media(min-width: 431px) and (max-width: 1300px) {
    padding: 0 3rem;
  }

  @media(min-width: 0) and (max-width: 930px) {
    flex-direction: column;
  }

  @media(min-width: 0) and (max-width: 430px) {
      padding: 1rem 1rem;
      flex-direction: column;
  }

`

export const CartDatas = styled.div`
  width: 100%;
`

export const Datas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
`
export const CartCoffee = styled.div`
  min-width: 28rem;

  @media (min-width: 0) and (max-width: 420px){
    min-width: 0;
    width: 100%;
  }
`

export const Coffees = styled.div`
`