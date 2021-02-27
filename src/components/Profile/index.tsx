import Image from 'next/image'
import { useChallenges } from '../../hooks/useChallenges'
import { Container } from './styles'

interface ProfileProps {
  imageUrl: string
  name: string
}

export function Profile({ imageUrl, name }: ProfileProps): JSX.Element {
  const { level } = useChallenges()

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
