import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: var(--bg);
    font: 600 1rem Roboto, system-ui, sans-serif;
  }

  input, button {
    outline: 0;
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
`
