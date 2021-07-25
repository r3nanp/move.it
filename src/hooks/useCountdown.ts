import { useContextSelector } from 'use-context-selector'
import { CountdownContext } from 'contexts/CountdownContext'

export function useCountdown() {
  const startCountdown = useContextSelector(
    CountdownContext,
    countdown => countdown.startCountdown
  )

  const resetCountdown = useContextSelector(
    CountdownContext,
    countdown => countdown.resetCountdown
  )

  const isActive = useContextSelector(
    CountdownContext,
    countdown => countdown.isActive
  )
  const hasFinished = useContextSelector(
    CountdownContext,
    countdown => countdown.hasFinished
  )

  return {
    startCountdown,
    resetCountdown,
    isActive,
    hasFinished
  }
}
