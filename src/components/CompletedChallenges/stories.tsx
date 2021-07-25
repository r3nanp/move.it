import { Meta, Story } from '@storybook/react/types-6-0'
import { CompletedChallenges } from '.'

export default {
  title: 'CompletedChallenges',
  component: CompletedChallenges,
  args: {
    challengesCompleted: 1
  }
} as Meta

export const Default: Story = args => <CompletedChallenges {...args} />
