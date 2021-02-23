import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
