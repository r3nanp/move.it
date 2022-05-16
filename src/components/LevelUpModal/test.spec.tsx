import { render } from '@testing-library/react'
import { LevelUpModal } from './index'

it('should render title', () => {
  const modal = jest.fn()

  const screen = render(<LevelUpModal level={12} closeModal={modal} />)
  expect(screen.getByText('Você alcançou um novo level!')).toBeInTheDocument()
})

it.todo('should verify if overlay exists')
