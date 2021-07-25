import { useToggle } from 'hooks/useToggle'
import * as S from './styles'

export type LevelUpModalProps = {
  level: number
}

export function LevelUpModal({ level }: LevelUpModalProps): JSX.Element {
  const [isOpen, toggleIsOpen] = useToggle(false)

  return (
    <S.Overlay onClick={toggleIsOpen} aria-hidden={!isOpen}>
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
          onClick={toggleIsOpen}
          aria-hidden={!isOpen}
          className="close"
        >
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </S.Container>
    </S.Overlay>
  )
}
