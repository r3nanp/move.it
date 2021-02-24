import Image from 'next/image'
import { FormEvent } from 'react'
import { Bar, ExitIcon, HomeIcon, AwardIcon } from './styles'

interface SidebarProps {
  handleExit: (event: FormEvent) => void
}

export function Sidebar({ handleExit }: SidebarProps) {
  return (
    <>
      <Bar>
        <Image
          src="/favicon@3x.png"
          width={200}
          height={200}
          alt="Move it logo"
          className="image"
        />
        <div className="icons-container">
          <HomeIcon />
          <AwardIcon />
          <ExitIcon onClick={handleExit} />
        </div>
      </Bar>
    </>
  )
}
