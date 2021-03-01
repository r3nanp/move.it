import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import { ThemeProvider } from '../contexts/ThemeContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/serviceworker.js')
        .then(() => {
          console.log('service worker registered')
        })
        .catch(() => {
          console.warn('service worker failed')
        })
    }
  }, [])

  return (
    <AuthProvider pageProps={pageProps.session}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
