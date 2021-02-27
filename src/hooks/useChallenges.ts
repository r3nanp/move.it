import { useContext } from 'react'
import {
  ChallengesContext,
  ChallengesContextData
} from '../contexts/ChallengesContext'

export function useChallenges(): ChallengesContextData {
  const context = useContext(ChallengesContext)

  return context
}
