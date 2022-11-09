import styled from "styled-components";

export const ItemsCart = styled.div`
  padding: 2.68rem;
  border-radius: 6px 44px;
  background-color: ${props => props.theme['base-card']};

  @media (min-width: 0) and (max-width: 420px){
    padding: 2rem 1rem;
    border-radius: 4px 20px;
  }
`

export const TextPrice = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Finish = styled.button`
  background: ${props => props.theme['yellow']};
  color: white;
  display: block;
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  margin-top: 1.5rem;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['yellow-dark']};
  }
`