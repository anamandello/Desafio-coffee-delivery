import styled from "styled-components";

export const Address = styled.div`
  padding: 2.68rem;
  border-radius: 6px;
  background-color: ${props => props.theme['base-card']};
`

export const AddressDatas = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;

    p {
      display: block;
      width: 100%;
      font-size: 0.7rem;
      color: red;
    }

    input{
      padding: 0.75rem;
      background: ${props => props.theme['base-input']};
      border: 1px solid ${props => props.theme['base-button']};
      border-radius: 4px;
      width: 100%;

      &::placeholder{
        color: ${props => props.theme['base-label']};
        font-size: 0.875rem;
      }

      &:focus{
        box-shadow: none;
        border: 1px solid ${props => props.theme['yellow']};
      }
    }

    #cep{
      width: 12.5rem;
    }

    #rua{
      width: 100%;
    }

    #numero{
      width: 12.5rem;
    }

    #complemento{
      width: calc(100% - 13.5rem);
    }

    #bairro{
      width: 12.5rem;
    }

    #cidade{
      width: calc(100% - 18.25rem)
    }

    #uf{
      width: 3.75rem;
    }

    @media (min-width: 0) and (max-width: 500px){
      #cep, #rua, #numero, #complemento, #bairro, #cidade, #uf{
        width: 100%;
      }
  }

`