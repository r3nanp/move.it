import { useCountdown } from 'hooks/useCountdown'
import { useCountdownTime } from 'hooks/useCountdownTime'
import * as S from './styles'

export function Countdown(): JSX.Element {
  const {
    startCountdown,
    resetCountdown,
    isActive,
    hasFinished
  } = useCountdown()
  const { minutes, seconds } = useCountdownTime()

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  return (
    <>
      <S.Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span className="separator">:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </S.Container>

      {hasFinished ? (
        <S.StartCountdown isActive disabled hasFinished>
          Ciclo encerrado!
          <img
            src="icons/check_circle.svg"
            alt="Ciclo encerrado"
            className="icon"
          />
        </S.StartCountdown>
      ) : (
        <>
          {isActive ? (
            <S.StartCountdown isActive type="button" onClick={resetCountdown}>
              Abandonar ciclo
              <img
                src="icons/close.svg"
                alt="Abandonar ciclo"
                className="icon"
              />
            </S.StartCountdown>
          ) : (
            <S.StartCountdown
              isActive={false}
              type="button"
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img
                src="icons/play_arrow.svg"
                alt="Começar ciclo"
                className="icon"
              />
            </S.StartCountdown>
          )}
        </>
      )}
    </>
  )
}
