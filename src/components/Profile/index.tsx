import Image from 'next/image'
import { useContext } from 'react'
import { ChallengesContext } from '../../contexts/ChallengesContext'
import { Container } from './styles'

interface ProfileProps {
  imageUrl: string
  name: string
}

export function Profile({ imageUrl, name }: ProfileProps) {
  const { level } = useContext(ChallengesContext)

  return (
    <Container>
      <Image
        src={imageUrl}
        width={88}
        height={88}
        alt="Profile image"
        className="image"
      />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="/icons/level.svg" alt="Level logo" />
          Level {level}
        </p>
      </div>
    </Container>
  )
}
