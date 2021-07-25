import '../.jest/next-image.mock'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { ChallengesContext, ChallengesDefaultValues } from '../src/contexts/ChallengesContext'
import { withNextRouter } from 'storybook-addon-next-router'
import { GlobalStyles } from '../src/styles/global'
import { themes } from '../src/styles/theme'

export const parameters = {
  backgrounds: {
    default: 'moveit-light',
    values: [
      {
        name: 'moveit-light',
        value: themes.light.bg
      },
      {
        name: 'moveit-dark',
        value: themes.dark.bg
      }
    ]
  }
}

addDecorator(withNextRouter())

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={themes.light}>
      <ChallengesContext.Provider
        value={{
          ...ChallengesDefaultValues,
          ...(context?.args?.challengeContextValue || {}),
          ...context.args
        }}
      >
        <GlobalStyles removeBg />
        <Story />
      </ChallengesContext.Provider>
    </ThemeProvider>
  )
]
