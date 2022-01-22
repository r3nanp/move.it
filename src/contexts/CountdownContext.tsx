import { useState, useEffect, ReactNode, useMemo, useCallback } from 'react'
import { createContext, useContext } from 'use-context-selector'

//* CUSTOM IMPORTS
import { ChallengesContext } from './ChallengesContext'

type CountdownContextData = {
  minutes: number
  seconds: number
  isActive: boolean
  hasFinished: boolean
  startCountdown: () => void
  resetCountdown: () => void
}

type CountdownProps = {
  children: ReactNode
}

let countdownTimeout: NodeJS.Timeout
const TWENTYFIVE_MINUTES = 25 * 60

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProps): JSX.Element {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(TWENTYFIVE_MINUTES)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = useMemo(() => Math.floor(time / 60), [time])

  const seconds = useMemo(() => time % 60, [time])

  const startCountdown = useCallback(() => {
    setIsActive(true)
  }, [setIsActive])

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout)
    setIsActive(false)

    setTime(TWENTYFIVE_MINUTES)
    setHasFinished(false)
  }, [setIsActive, setHasFinished, setTime])

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, startNewChallenge, time])

  return (
    <CountdownContext.Provider
      value={{
        //* STATES
        minutes,
        seconds,
        hasFinished,
        isActive,
        //* FUNCTIONS
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
