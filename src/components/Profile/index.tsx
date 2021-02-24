import Image from 'next/image'
import { Container } from './styles'

interface ProfileProps {
  imageUrl: string
  name: string
}

export function Profile({ imageUrl, name }: ProfileProps) {
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
          Level 1
        </p>
      </div>
    </Container>
  )
}
