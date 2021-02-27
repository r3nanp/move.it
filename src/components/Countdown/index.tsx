import { useCountdown } from '../../hooks/useCountdown'
import { Container, StartCountdown } from './styles'

export function Countdown(): JSX.Element {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useCountdown()

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </Container>

      {hasFinished ? (
        <StartCountdown isActive disabled>
          Ciclo encerrado!
          <img src="icons/check_circle" alt="Ciclo encerrado" />
        </StartCountdown>
      ) : (
        <>
          {isActive ? (
            <StartCountdown isActive type="button" onClick={resetCountdown}>
              Abandonar ciclo
            </StartCountdown>
          ) : (
            <StartCountdown
              isActive={false}
              type="button"
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </StartCountdown>
          )}
        </>
      )}
    </>
  )
}
