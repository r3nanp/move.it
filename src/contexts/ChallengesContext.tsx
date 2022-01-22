import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { createContext } from 'use-context-selector'
import axios from 'axios'
import toast from 'react-hot-toast'

import { LevelUpModal } from 'components/LevelUpModal'
import { ChallengeProps } from 'types/Challenges'

type ChallengesContextData = {
  challengesCompleted: number
  currentExperience: number
  level: number
  isLoading: boolean
  experienceToNextLevel: number
  activeChallenge: ChallengeProps
  isLevelUpModalOpen: boolean
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
}

type ProviderProps = {
  children: ReactNode
  challenges: ChallengeProps[]
  challengesCompleted: number
  currentExperience: number
  accessToken: string
  level: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({
  children,
  accessToken,
  ...rest
}: ProviderProps): JSX.Element {
  //* STATES
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  )
  const [activeChallenge, setActiveChallenge] = useState<ChallengeProps | null>(
    null
  )
  const [isLoading, setIsLoading] = useState(false)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = useMemo(() => Math.pow((level + 1) * 4, 2), [
    level
  ])

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  const levelUp = useCallback(() => {
    setLevel(level + 1)
    setIsLevelUpModalOpen(!isLevelUpModalOpen)
  }, [isLevelUpModalOpen, level])

  const startNewChallenge = useCallback(() => {
    const randomChallengesIndex = Math.floor(
      Math.random() * rest.challenges.length
    )
    const challenge = rest.challenges[randomChallengesIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    /* eslint-disable no-new */
    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎊', {
        body: `Valendo ${challenge.amount} xp`
      })
    }
  }, [rest.challenges])

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null)
  }, [])

  const completeChallenge = useCallback(async () => {
    if (!activeChallenge) return

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount
    let isLevelUpdated = false

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel

      levelUp()
      isLevelUpdated = true
    }

    setIsLoading(true)

    try {
      await axios.put('/api/complete-challenge', {
        level: isLevelUpdated ? level : level + 1,
        currentExperience: finalExperience,
        challengesCompleted: challengesCompleted + 1,
        accessToken,
        amount
      })
    } catch (e) {
      toast.error(e)
    }

    isLevelUpdated = false

    setIsLoading(false)

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }, [
    accessToken,
    activeChallenge,
    challengesCompleted,
    currentExperience,
    experienceToNextLevel,
    level,
    levelUp
  ])

  return (
    <ChallengesContext.Provider
      {...rest}
      value={{
        //* STATES
        level,
        isLevelUpModalOpen,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        isLoading,

        //* FUNCTIONS
        levelUp,
        completeChallenge,
        startNewChallenge,
        resetChallenge
      }}
    >
      {children}

      {isLevelUpModalOpen && (
        <LevelUpModal
          level={level}
          closeModal={() => setIsLevelUpModalOpen(!isLevelUpModalOpen)}
        />
      )}
    </ChallengesContext.Provider>
  )
}
