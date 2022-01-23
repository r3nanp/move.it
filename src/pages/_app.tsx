import { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import { AuthProvider } from 'contexts/AuthContext'
import { ThemeProvider } from 'contexts/ThemeContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider pageProps={pageProps.session}>
      <ThemeProvider>
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
