import { useContextSelector } from 'use-context-selector'
import { CountdownContext } from 'contexts/CountdownContext'

export const useCountdownTime = () => {
  const minutes = useContextSelector(
    CountdownContext,
    countdown => countdown.minutes
  )
  const seconds = useContextSelector(
    CountdownContext,
    countdown => countdown.seconds
  )

  return {
    minutes,
    seconds
  }
}
