import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme['base-card']};
  width: 256px;
  border-radius: 6px 36px;

  img{
    width: 7.5rem;
    margin-top: -1.75rem;
  }
`
export const NameCoffee = styled.h3`
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 26px;
    margin: 1rem 0 0.5rem;
`

export const DescriptionCoffe = styled.p`
  font-size: 0.875rem;
  text-align: center;
  padding: 0 1.25rem;
  color: ${props => props.theme['base-label']};
`

export const TypesCoffee = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    border-radius: 100px;
    font-weight: bold;
    font-size: 0.625rem;
  }
`

