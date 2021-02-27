import { useChallenges } from '../../hooks/useChallenges'
import { Container, Overlay } from './styles'

export function LevelUpModal(): JSX.Element {
  const { level, closeLevelUpModal } = useChallenges()

  return (
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level!</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </Container>
    </Overlay>
  )
}
