import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from 'styled-components'

const ButtonHeight = 48

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background: ${({ theme }): string => theme.controlBar};
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  user-select: none;
  padding: 0 2rem;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: 400px) {
    padding: 0 1rem;
  }
`

export const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-height: ${ButtonHeight}px;
  min-width: ${ButtonHeight}px;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ theme }): string => theme.primaryText};

  &:hover {
    background: ${({ theme }): string => theme.accent};
    color: white;
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`

export const DifficultyIndicator = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }): string => theme.primaryText};
  background: rgba(255, 255, 255, 0.1);
  padding: 0.8rem 1.6rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media only screen and (max-width: 700px) {
    display: none;
  }
`

export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const TimerText = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }): string => theme.primaryText};
`

export const Timer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.6rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 1.6rem;
  color: ${({ theme }): string => theme.primaryText};

  ${TimerText} {
    margin-left: 0.8rem;
  }
`

export const ButtonText = styled.span`
  font-weight: 600;
  font-size: 1.4rem;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${ButtonHeight}px;
  padding: 0 1.6rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ theme }): string => theme.primaryText};
  font-size: 1.6rem;

  &:hover {
    background: ${({ theme }): string => theme.accent};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  ${ButtonText} {
    margin-left: 0.8rem;
  }
`

export const PlayPauseButton = styled(Button)`
  min-width: ${ButtonHeight}px;
  padding: 0;
`

const DisabledButtonStyle = css`
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: not-allowed;
  opacity: 0.5;

  &:hover {
    background: rgba(255, 255, 255, 0.05) !important;
    color: ${({ theme }): string => theme.primaryText};
    transform: none;
    box-shadow: none;
  }
`

export const RestartButton = styled(Button)<{ isPaused?: boolean }>`
  ${({ isPaused }): FlattenInterpolation<ThemeProps<DefaultTheme>> | null =>
    !isPaused ? DisabledButtonStyle : null}
`
