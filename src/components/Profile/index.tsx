import Image from 'next/image'
import { useChallenges } from 'hooks/useChallenges'
import * as S from './styles'

type ProfileProps = {
  imageUrl: string
  name: string
}

export function Profile({ imageUrl, name }: ProfileProps): JSX.Element {
  const { level } = useChallenges()

  return (
    <S.Container>
      <div className="image-wrapper">
        <Image
          src={imageUrl}
          width={88}
          height={88}
          alt={name}
          objectFit="cover"
        />
      </div>

      <div className="profile-content">
        <strong>{name}</strong>
        <p className="level">
          <img src="/icons/level.svg" alt="Level logo" />
          Level {level}
        </p>
      </div>
    </S.Container>
  )
}
