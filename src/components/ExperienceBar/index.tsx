import { useChallenges } from '../../hooks/useChallenges'
import { Header } from './styles'

export function ExperienceBar(): JSX.Element {
  const { currentExperience, experienceToNextLevel } = useChallenges()

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <Header>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}>
          <span
            className="current-experience"
            style={{ left: `${percentToNextLevel}%` }}
          >
            {currentExperience} xp
          </span>
        </div>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Header>
  )
}
