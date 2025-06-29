import styled from 'styled-components'

type ContainerType = {
  isVisible?: boolean
  isShowingFrontFace?: boolean
  disabled?: boolean
}

export const Container = styled.div<ContainerType>`
  width: 100%;
  height: 100%;
  min-height: 120px;
  border-radius: 16px;
  margin: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-size: 3.2rem;

  opacity: ${({ isVisible }): string => (isVisible ? '1' : '0')};
  transform: ${({ isVisible }): string =>
    isVisible ? 'scale(1)' : 'scale(0.8)'};

  pointer-events: ${({ isVisible, disabled }): string => {
    if (disabled || !isVisible) return 'none'
    return 'all'
  }};

  color: ${({ isShowingFrontFace, theme }): string =>
    isShowingFrontFace ? theme.cardBackFace : theme.cardFrontFace};

  background: ${({ isShowingFrontFace, theme }): string =>
    isShowingFrontFace
      ? theme.cardFrontFace
      : `linear-gradient(135deg, ${theme.cardBackFace} 0%, ${theme.cardBackFace}dd 100%)`};

  box-shadow: ${({ theme }): string => theme.cardShadow};
  border: 1px solid rgba(255, 255, 255, 0.1);

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

  &:hover {
    transform: ${({ isVisible }): string =>
      isVisible ? 'translateY(-4px) scale(1.02)' : 'scale(0.8)'};
    box-shadow: ${({ theme }): string => theme.cardHoverShadow};
    border-color: ${({ theme }): string => theme.accent};

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: ${({ isVisible }): string =>
      isVisible ? 'translateY(-2px) scale(0.98)' : 'scale(0.8)'};
  }

  /* Card flip animation */
  transform-style: preserve-3d;
  perspective: 1000px;

  ${({ isShowingFrontFace }): string =>
    isShowingFrontFace
      ? `
        animation: cardFlip 0.6s ease-in-out;
        @keyframes cardFlip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(90deg); }
          100% { transform: rotateY(0deg); }
        }
      `
      : ''}
`
