import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: var(--bg);
    font: 400 1rem Inter, system-ui, sans-serif;
    color: var(--text);
  }

  body, textarea, input, button {
    font: 400 1rem Inter, system-ui, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :root {
    ${props => {
      const theme = props.theme
      let append = ''
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`
      })
      return append
    }}
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`
