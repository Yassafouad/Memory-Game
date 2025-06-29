import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

export const Container = styled.div<{ isShowing?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: ${({ isShowing }): string => (isShowing ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-out;
  user-select: none;
  padding: 2rem;
`

export const Dialog = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  width: 100%;
  max-width: 500px;
  animation: ${slideIn} 0.3s ease-out;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`

export const TitleContainer = styled.div`
  padding: 2.4rem 2.4rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    135deg,
    ${({ theme }): string => theme.accent} 0%,
    ${({ theme }): string => theme.accentHover} 100%
  );
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 100%
    );
  }
`

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.1em;
  margin: 0;
`

export const CloseButton = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 1.6rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`

export const Message = styled.div`
  padding: 2.4rem;
  color: ${({ theme }): string => theme.primaryText};
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: center;
`

export const Footer = styled.div`
  padding: 0 2.4rem 2.4rem;
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`
