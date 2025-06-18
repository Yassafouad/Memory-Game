import { ThemeTypes } from '../types/Theme'

export default {
  [ThemeTypes.dark]: {
    accent: '#4a90e2',
    primaryText: '#ffffff',
    secondaryText: '#b0b0b0',
    background: '#1a1a1a',
    controlBar: '#2d2d2d',
    cardBackFace: '#333333',
    cardFrontFace: '#f5f5f5',
  },
  [ThemeTypes.light]: {
    accent: '#4a90e2',
    primaryText: '#2c3e50',
    secondaryText: '#7f8c8d',
    background: '#f9f9f9',
    controlBar: '#e0e0e0',
    cardBackFace: '#34495e',
    cardFrontFace: '#ecf0f1',
  },
}
