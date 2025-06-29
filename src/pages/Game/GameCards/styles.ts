import styled from 'styled-components'
import Card from '../../../components/Card'

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`

type CardItemType = {
  numOfCardsInEachLine: number
}

export const CardItem = styled(Card)<CardItemType>`
  min-height: 120px;
  min-width: 120px;
  height: clamp(120px, 15vh, 180px);
  width: clamp(120px, 15vw, 200px);
  font-size: clamp(2.4rem, 4vw, 4.8rem);
  flex: 0 0 auto;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    min-height: 100px;
    min-width: 100px;
    height: clamp(100px, 12vh, 140px);
    width: clamp(100px, 12vw, 160px);
    font-size: clamp(2rem, 3vw, 3.2rem);
  }

  @media (max-width: 480px) {
    min-height: 80px;
    min-width: 80px;
    height: clamp(80px, 10vh, 120px);
    width: clamp(80px, 10vw, 140px);
    font-size: clamp(1.6rem, 2.5vw, 2.4rem);
  }
`
