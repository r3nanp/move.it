import { Header } from './styles'

function ExperienceBar() {
  return (
    <Header>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }}>
          <span className="current-experience" style={{ left: '50%' }}>
            300px
          </span>
        </div>
      </div>
      <span>600 xp</span>
    </Header>
  )
}

export { ExperienceBar }
