import styled, {
  css,
  FlattenInterpolation,
  DefaultTheme,
  ThemeProps,
} from 'styled-components'

type CssType = FlattenInterpolation<ThemeProps<DefaultTheme>> | null

const ItemSelected = css`
  background: linear-gradient(
    135deg,
    ${({ theme }): string => theme.accent} 0%,
    ${({ theme }): string => theme.accentHover} 100%
  ) !important;
  color: white !important;
  transform: translateY(-8px) scale(1.05);
  box-shadow: ${({ theme }): string => theme.cardHoverShadow};
`

export const Container = styled.div<{ isSelected: boolean }>`
  padding: 2rem 1.5rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${({ theme }): string => theme.cardShadow};
  min-height: 120px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${({ isSelected }): CssType => (isSelected ? ItemSelected : null)}

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }): string => theme.cardHoverShadow};
    border-color: ${({ theme }): string => theme.accent};

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-4px) scale(0.98);
  }
`

export const DificultyName = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  text-align: center;
`

export const NumberOfCards = styled.div`
  font-size: 3.6rem;
  font-weight: 800;
  color: ${({ theme }): string => theme.accent};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
