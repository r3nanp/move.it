import Image from 'next/image'
import { Bar, Container, HomeIcon, AwardIcon } from './styles'

export function Sidebar() {
  return (
    <Container>
      <Bar>
        <Image
          src="/favicon@3x.png"
          width={100}
          height={100}
          alt="Move it logo"
          className="image"
        />
        <div className="icons-container">
          <HomeIcon />

          <AwardIcon />
        </div>
      </Bar>
    </Container>
  )
}
