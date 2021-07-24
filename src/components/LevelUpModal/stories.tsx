import { Meta, Story } from '@storybook/react/types-6-0'
import { LevelUpModal } from '.'

export default {
  title: 'LevelUpModal',
  component: LevelUpModal,
  args: {
    level: 2
  }
} as Meta

export const Default: Story = args => <LevelUpModal {...args} />
