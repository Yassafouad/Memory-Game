import styled from 'styled-components'
import DifficultyItem from '../../components/DifficultyItem'

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: 2rem;
  min-height: 100vh;
`

export const MenuContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 35px 70px rgba(0, 0, 0, 0.2);
  }
`

export const AppName = styled.h1`
  font-size: 3.2rem;
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${({ theme }): string => theme.accent} 0%,
    ${({ theme }): string => theme.accentHover} 100%
  );
  color: white;
  padding: 2.4rem 0;
  letter-spacing: 0.1em;
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

export const MenuContent = styled.div`
  padding: 4rem 3rem;
`

export const DifficultyLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding: 0 0.5rem;
`

export const DifficultyLabel = styled.div`
  flex: 1;
`

export const DifficultyLabelTitle = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }): string => theme.primaryText};
`

export const DifficultyLabelSubtitle = styled.p`
  color: ${({ theme }): string => theme.secondaryText};
  font-size: 1.4rem;
  font-weight: 400;
`

export const SwitchThemesButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: ${({ theme }): string => theme.primaryText};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: ${({ theme }): string => theme.accent};
    color: white;
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
  }
  
  &:active {
    transform: scale(0.95);
  }
`

export const Difficulty = styled(DifficultyItem)`
  width: calc(50% - 1rem);
  margin: 1rem 0.5rem;
  text-align: center;
  flex: 1;
  min-width: 140px;
`

export const DifficultyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
`

export const PlayButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`

export const PlayButton = styled.button`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    ${({ theme }): string => theme.accent} 0%,
    ${({ theme }): string => theme.accentHover} 100%
  );
  color: white;
  padding: 2rem 4rem;
  text-align: center;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
  letter-spacing: 0.1em;
  min-width: 200px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.4);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`
