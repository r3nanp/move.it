import { useEffect, useState } from 'react'
import { Container, StartCountdown } from './styles'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)

    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

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
