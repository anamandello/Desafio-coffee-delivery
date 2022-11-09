import styled from "styled-components";

export const Icons = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem;

  div{
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`

const STATUS_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  purple: 'purple',
  baseText: 'base-text'

} as const

interface ColorIconProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const ColorIcon = styled.div<ColorIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 999px;
  background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
  color: white;
`