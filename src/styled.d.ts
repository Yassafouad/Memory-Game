import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    accent: string
    accentHover: string
    primaryText: string
    secondaryText: string
    background: string
    backgroundSolid: string
    controlBar: string
    cardBackFace: string
    cardFrontFace: string
    cardShadow: string
    cardHoverShadow: string
    border: string
    success: string
    warning: string
    error: string
  }
}
