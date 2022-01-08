import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { createContext } from 'use-context-selector'
import { setCookie } from 'utils/cookies'

import { LevelUpModal } from 'components/LevelUpModal'

type ChallengeProps = {
  type: string
  description: string
  amount: number
}

type ChallengesContextData = {
  challengesCompleted: number
  currentExperience: number
  level: number
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
  level: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({
  children,
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
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = useMemo(() => Math.pow((level + 1) * 4, 2), [
    level
  ])

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    setCookie('level', String(level))
    setCookie('currentExperience', String(currentExperience))
    setCookie('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

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

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) return

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel

      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }, [
    activeChallenge,
    challengesCompleted,
    currentExperience,
    experienceToNextLevel,
    levelUp
  ])

  return (
    <ChallengesContext.Provider
      {...rest}
      value={{
        level,
        isLevelUpModalOpen,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
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
