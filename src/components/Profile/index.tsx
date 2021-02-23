import Image from 'next/image'
import { Container, LeftContainer } from './styles'

interface ProfileProps {
  imageUrl: string
  name: string
}

export function Profile({ imageUrl, name }: ProfileProps) {
  return (
    <LeftContainer>
      <Image
        src={imageUrl}
        width={100}
        height={100}
        alt="Profile image"
        className="image"
      />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level logo" id="level" />
          Level 1
        </p>
      </div>
    </LeftContainer>
  )
}
