import { useChallenges } from 'hooks/useChallenges'
import * as S from './styles'

export function LevelUpModal(): JSX.Element {
  const {
    level,
    toggleIsLevelUpModalOpen,
    isLevelUpModalOpen
  } = useChallenges()

  return (
    <S.Overlay
      onClick={toggleIsLevelUpModalOpen}
      aria-hidden={!isLevelUpModalOpen}
    >
      <S.Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level!</p>

        <footer>
          <button className="twitter">
            Compartilhe no Twitter
            <S.TwitterIcon />
          </button>
        </footer>

        <button
          type="button"
          onClick={toggleIsLevelUpModalOpen}
          aria-hidden={!isLevelUpModalOpen}
          className="close"
        >
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </S.Container>
    </S.Overlay>
  )
}
