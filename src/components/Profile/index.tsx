import Image from 'next/image'
import { Container, LeftContainer } from './styles'

interface ProfileProps {
  imageUrl: string
  name?: string
  children?: React.ReactNode
}

export function Profile({ imageUrl }: ProfileProps) {
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
        <strong>Renan Pereira</strong>
        <p>
          <img src="icons/level.svg" alt="Level logo" id="level" />
          Level 1
        </p>
      </div>
    </LeftContainer>
  )
}
