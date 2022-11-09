import styled from "styled-components"

const STATUS_COLORS = {
  yellow: 'yellow-dark',
  purple: 'purple',
} as const

interface ColorIconProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const IconsHeader = styled.div`
    display: flex;
    gap: 0.5rem;
    
    div{
      gap: 0.125rem;

      h3{
        font-size: 1rem;
        color: ${props => props.theme['base-subtitle']};
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.8;
      }

      p{
        font-size: 0.875rem;
        color: ${props => props.theme['base-text']};
        line-height: 1.6;
      }
    }
`

export const Icons = styled.div<ColorIconProps>`
  display: flex;
  padding-top: 3px;

  svg{
      color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
    }
`