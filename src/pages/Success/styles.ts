import styled from "styled-components";

export const SuccessContainer = styled.div`
  max-width: 1440px;
  padding: 0 10rem;
  margin: auto;  
  margin-top: 9.5rem;
  display: flex;
  flex-direction: column;

  h1{
    color: ${props => props.theme['yellow-dark']};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
  }

  p{
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }

  @media (min-width: 0) and (max-width: 767px){
    align-items: center;
  }

  @media(min-width: 431px) and (max-width: 1300px) {
    padding: 0 3rem;
  }

  @media(min-width: 0) and (max-width: 430px) {
    padding: 1rem 1rem;
    h1 {
      text-align: center;
    }
  }
`

export const InfoDatas = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 0) and (max-width: 767px){
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    img{
      width: 80%;
    }
  }

  @media(min-width: 0) and (max-width: 430px) {
    img{
      width: 60%;
    }
  }
`

export const Border = styled.div`
  border: double 2px transparent;
  border-radius: 6px 34px;
  background-image: linear-gradient(${props => props.theme['background']}, ${props => props.theme['background']}), radial-gradient(circle at top left, ${props => props.theme['yellow']}, ${props => props.theme['purple']});
  background-origin: border-box;
  background-clip: content-box, border-box;

  margin-top: 2.5rem;
  min-width: 32.875rem;

  @media(min-width: 0) and (max-width: 480px) {
    min-width: 0;
    width: 100%;
  }
`

export const DeliveryDatas = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media(min-width: 0) and (max-width: 750px) {
    padding: 1.5rem;
  }
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const STATUS_COLORS ={
  'purple': 'purple',
  'yellowDark': 'yellow-dark',
  'yellow': 'yellow'
} as const

interface IconsProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Icons = styled.div<IconsProps>`
  background: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`

export const Texts = styled.div`
  p {
    font-size: 1rem;
  }
`