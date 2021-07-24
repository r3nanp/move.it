import { AppProps } from 'next/app'
import { AuthProvider } from 'contexts/AuthContext'
import { ThemeProvider } from 'contexts/ThemeContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider pageProps={pageProps.session}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
