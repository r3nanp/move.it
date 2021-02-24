import { createContext, useState } from 'react'
import challenges from '../../challenges.json'

interface ChallengeProps {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextProps {
  challengesCompleted: number
  currentExperience: number
  level: number
  experienceToNextLevel: number
  activeChallenge: ChallengeProps
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
}

interface ProviderProps {
  children: React.ReactNode
}

export const ChallengesContext = createContext<ChallengesContextProps>(
  {} as ChallengesContextProps
)

export function ChallengesProvider({ children }: ProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function startNewChallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengesIndex]

    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        currentExperience,
        challengesCompleted,
        level,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
