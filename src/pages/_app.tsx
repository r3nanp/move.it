import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../contexts/AuthContext'

import { theme } from '../styles/theme'
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider pageProps={pageProps.session}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
