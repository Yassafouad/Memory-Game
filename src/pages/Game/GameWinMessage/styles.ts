import styled, { css } from 'styled-components'

const Button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2.4rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  min-width: 140px;
  border: none;
  outline: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`

export const PrimaryAction = styled.button`
  ${Button}
  background: linear-gradient(
    135deg,
    ${({ theme }): string => theme.accent} 0%,
    ${({ theme }): string => theme.accentHover} 100%
  );
  color: white;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);

  &:hover {
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
  }
`

export const SecondaryAction = styled.button`
  ${Button}
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }): string => theme.primaryText};
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: ${({ theme }): string => theme.accent};
  }
`
