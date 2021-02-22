import { Container } from '../components/Container'
import { ExperienceBar } from '../components/ExperienceBar'
import { SEO } from '../components/SEO/SEO'

export default function Home() {
  return (
    <Container>
      <SEO title="Move.it" />

      <ExperienceBar />
    </Container>
  )
}
