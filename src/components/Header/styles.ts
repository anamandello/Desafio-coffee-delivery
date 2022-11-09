import styled from "styled-components"

export const HeaderContainerFixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5002;
  background: ${props => props.theme['background']};
`

export const HeaderContainer = styled.header`
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  nav{
    display: flex;
    gap: 1.29rem;
  }

  @media(min-width: 431px) and (max-width: 1300px) {
    padding: 2rem 3rem;
  }

  @media(min-width: 0) and (max-width: 430px) {
      padding: 1rem 1rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a{
    height: 40px;
  }

  @media(min-width: 0) and (max-width: 430px) {
    a{
      height: 2rem;
    }
    img{
      height: 2rem;
    }
  }
`

export const LocalizationContainer = styled.div`
  a{
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.875rem;
    background: ${props => props.theme['purple-light']};
    padding: 0.5rem;
    border-radius: 6px;
    text-decoration: none;
    
    svg{
      color: ${props => props.theme['purple']};
    }
    
    p{
      color: ${props => props.theme['purple-dark']};
    }
  }

  @media(min-width: 0) and (max-width: 430px) {
    a{
      padding: 0.2rem;
    }
  }
`

interface CartContainerProps{
  text?: number;
} 

export const CartContainer = styled.div<CartContainerProps>`
  display: flex;

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']}
  }

  &::after{
    ${props => { 
      if(props.text)
        return `content: '${props.text}'`
    }};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background: ${props => props.theme['yellow-dark']};
    font-size: 0.75rem;
    color: white;
    border-radius: 10px;
    position: relative;
    font-weight: bold;
    left: -10px;
    top: -7px;
  }


  @media(min-width: 0) and (max-width: 430px) {
    a{
      padding: 0.2rem;
    }
  }
`