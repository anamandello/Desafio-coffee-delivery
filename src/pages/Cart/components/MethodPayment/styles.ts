import styled from "styled-components";

export const PaymentMethods = styled.div`
  padding: 2.68rem;
  border-radius: 6px;
  background-color: ${props => props.theme['base-card']};
  display: flex;
  gap: 2rem;
  flex-direction: column;
`

export const MethodsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;

  @media (min-width: 0) and (max-width: 500px){
    flex-direction: column;
  }
`

const STATUS ={
  'enable': ['purple-light', 'purple'],
  'disable': ['base-button', 'base-button']
} as const

interface SelectProps {
  status: keyof typeof STATUS
}

export const Method = styled.label<SelectProps>`
  background: ${props => props.theme[STATUS[props.status][0]]};
  border: 1px solid ${props => props.theme[STATUS[props.status][1]]};
  padding: 1rem;
  width: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  cursor: pointer;

    input[type='radio']{
      display: none;
    }

    svg{
      color: ${props => props.theme['purple']};
    }

    span{
      text-transform: uppercase;
    }

    &:hover{
      background: ${props => props.theme['purple-light']};
      border: 1px solid ${props => props.theme['purple']}
    }

    &::focus{
      background: ${props => props.theme['purple-light']};
    }    
`
