import { createGlobalStyle, css } from 'styled-components'

const fontStyle = css`
  color: ${({ theme }): string => theme.primaryText};
  line-height: 1.6;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
`

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background: ${({ theme }): string => theme.background};
    background-attachment: fixed;
    ${fontStyle}
    overflow-x: hidden;
  }

  html, body, #root {
    height: 100%;
  }

  textarea, input, button {
    font-family: inherit;
    ${fontStyle}
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.025em;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2rem;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }): string => theme.border};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }): string => theme.accent};
  }
`
