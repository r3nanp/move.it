import { useMemo } from 'react'
import { useChallenges } from 'hooks/useChallenges'
import * as S from './styles'

export function ExperienceBar(): JSX.Element {
  const { currentExperience, experienceToNextLevel } = useChallenges()

  const percentToNextLevel = useMemo(
    () => Math.round(currentExperience * 100) / experienceToNextLevel,
    [currentExperience, experienceToNextLevel]
  )

  return (
    <S.Header>
      <span>0 xp</span>
      <S.Wrapper>
        <div style={{ width: `${percentToNextLevel}%` }}>
          <span
            className="current-experience"
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExperience} xp
          </span>
        </div>
      </S.Wrapper>
      <span>{experienceToNextLevel} xp</span>
    </S.Header>
  )
}
