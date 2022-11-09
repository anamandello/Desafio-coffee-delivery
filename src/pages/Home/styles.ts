import styled from "styled-components";

export const ContainerHome = styled.div`
  max-width: 1440px;
  padding: 0 10rem;
  margin: auto;  
  margin-top: 9.5rem;

  h2{
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 2rem;
    color: ${props => props.theme['base-subtitle']};
  }

  @media(min-width: 431px) and (max-width: 1300px) {
    margin-top: 8rem;
    padding: 0 3rem;
  }

  @media(min-width: 0) and (max-width: 430px) {
    margin-top: 4rem;
    padding: 1rem 1rem;
  }
`

export const ContainerMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  margin-top: 5.75rem;
  margin-bottom: 5.875rem;

  main{
    display: flex;
    flex-direction: column;

    h1{
      color: ${props => props.theme['base-title']};
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 3rem;
      line-height: 3.9rem;
    }

    p {
      margin-top: 1rem;
      font-size: 1.25rem;
    }

    img{
      width: 29.75rem;
    }
  }

  @media(min-width: 801px) and (max-width: 1300px) {
    margin-top: 2rem;
    img{
      width: 25rem;
    }
  }

  @media(min-width: 0px) and (max-width: 800px) {
    margin-top: 2rem;
    flex-direction: column;
    align-items: center;

    img{
      width: 100%;
      max-width: 380px;
    }
    &:last-child{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const CoffeeMenu = styled.div`
  margin-top: 3.375rem;
`

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-bottom: 3rem;
`