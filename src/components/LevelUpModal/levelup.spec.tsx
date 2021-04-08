import { render } from '@testing-library/react'
import { LevelUpModal } from './index'

const screen = render(<LevelUpModal />)

it('should render title', () => {
  expect(screen.getByText('Você alcançou um novo level!')).toBeInTheDocument()
})

it('should verify if overlay exists', () => {
  const overlay = screen.getByText(/overlay/).parentElement

  expect(overlay).toHaveAttribute('aria-hidden', 'false')
})
