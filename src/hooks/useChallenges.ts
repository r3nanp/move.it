import { useContextSelector } from 'use-context-selector'
import { ChallengesContext } from 'contexts/ChallengesContext'

export function useChallenges() {
  const levelUp = useContextSelector(
    ChallengesContext,
    challenge => challenge.levelUp
  )
  const level = useContextSelector(
    ChallengesContext,
    challenge => challenge.level
  )
  const isLevelUpModalOpen = useContextSelector(
    ChallengesContext,
    challenge => challenge.isLevelUpModalOpen
  )

  const activeChallenge = useContextSelector(
    ChallengesContext,
    challenge => challenge.activeChallenge
  )

  const startNewChallenge = useContextSelector(
    ChallengesContext,
    challenge => challenge.startNewChallenge
  )

  const currentExperience = useContextSelector(
    ChallengesContext,
    challenge => challenge.currentExperience
  )
  const experienceToNextLevel = useContextSelector(
    ChallengesContext,
    challenge => challenge.experienceToNextLevel
  )

  const challengesCompleted = useContextSelector(
    ChallengesContext,
    challenge => challenge.challengesCompleted
  )

  const completeChallenge = useContextSelector(
    ChallengesContext,
    challenge => challenge.completeChallenge
  )

  const isLoading = useContextSelector(
    ChallengesContext,
    challenge => challenge.isLoading
  )

  const resetChallenge = useContextSelector(
    ChallengesContext,
    challenge => challenge.resetChallenge
  )

  return {
    level,
    isLevelUpModalOpen,
    activeChallenge,
    challengesCompleted,
    currentExperience,
    experienceToNextLevel,
    isLoading,
    levelUp,
    completeChallenge,
    startNewChallenge,
    resetChallenge
  }
}
