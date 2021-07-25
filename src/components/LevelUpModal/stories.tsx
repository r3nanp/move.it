import { Meta, Story } from '@storybook/react/types-6-0'
import { LevelUpModal, LevelUpModalProps } from '.'

export default {
  title: 'LevelUpModal',
  component: LevelUpModal
} as Meta

export const Default: Story<LevelUpModalProps> = args => (
  <LevelUpModal {...args} />
)

Default.args = {
  level: 1
}
