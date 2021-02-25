import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { AuthProvider } from '../contexts/AuthContext'

import { theme } from '../styles/theme'
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider pageProps={pageProps.session}>
      <ChallengesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ChallengesProvider>
    </AuthProvider>
  )
}

export default MyApp
