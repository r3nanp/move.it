// import { useContextSelector } from 'use-context-selector'
import { useContext } from 'react'
import { CountdownContext } from 'contexts/CountdownContext'

export function useCountdown() {
  const context = useContext(CountdownContext)

  return context
}
