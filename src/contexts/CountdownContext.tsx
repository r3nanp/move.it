import { useState, useEffect, ReactNode, useMemo, useCallback } from 'react'
import { createContext, useContext } from 'use-context-selector'
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

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownProps): JSX.Element {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(25 * 60)
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

    setTime(25 * 60)
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
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
