import { useContext } from 'react'
import {
  CountdownContext,
  CountdownContextData
} from '../contexts/CountdownContext'

export function useCountdown(): CountdownContextData {
  const context = useContext(CountdownContext)

  return context
}
