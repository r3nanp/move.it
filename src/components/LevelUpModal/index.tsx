import * as S from './styles'

export type LevelUpModalProps = {
  level: number
  closeModal: () => void
}

export function LevelUpModal({
  level,
  closeModal
}: LevelUpModalProps): JSX.Element {
  return (
    <S.Overlay onClick={closeModal}>
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

        <button type="button" onClick={closeModal} className="close">
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </S.Container>
    </S.Overlay>
  )
}
