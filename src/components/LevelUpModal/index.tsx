import { ReactElement } from 'react'
import { useChallenges } from '../../hooks/useChallenges'
import { Container, Overlay } from './styles'

export function LevelUpModal(): ReactElement {
  const { level, closeLevelUpModal, isLevelUpModalOpen } = useChallenges()

  return (
    <Overlay onClick={closeLevelUpModal} aria-hidden={!isLevelUpModalOpen}>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level!</p>

        <button
          type="button"
          onClick={closeLevelUpModal}
          aria-hidden={!isLevelUpModalOpen}
        >
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </Container>
    </Overlay>
  )
}
