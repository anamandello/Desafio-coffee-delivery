import styled from "styled-components"

export const InfoCoffee = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem 1.25rem;

  form{
    display: flex;
    gap: 0.5rem;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
  }

  button[type="submit"]{
    background: ${props => props.theme['purple-dark']};
    color: ${props => props.theme['white']};
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button[type="submit"]:hover{
    background: ${props => props.theme['purple']};
  }
`

export const PriceCoffe = styled.div`
  p {
    padding: 0;
    text-align: right;
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']}
  }
  span {
    padding: 0;
    font-size: 1.5rem;
    font-weight: 800;
    font-family: 'Baloo 2';
  }
`

export const Amount = styled.div`
  display: flex;
  width: 4.5rem;
  color: ${props => props.theme['purple']};
  background: ${props => props.theme['base-button']};
  border-radius: 6px;
  font-size: 1rem;
`

export const TextCounter = styled.input`
  color: ${props => props.theme['base-title']};
  text-align: center;
  min-width: 18px;
  width: 100%;
  background-color: transparent;
`

export const CounterItem = styled.button`
  display:flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  color: ${props => props.theme['purple']};

  cursor: pointer;

  &:hover{
    color: ${props => props.theme['purple-dark']};
    background-color: ${props => props.theme['base-hover']};
    border-radius: inherit;
  }

  &:focus{
    box-shadow: none;
    background-color: ${props => props.theme['base-hover']};
    border-radius: inherit;
  }
`