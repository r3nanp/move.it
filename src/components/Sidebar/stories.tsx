import Router from 'next/router'
import { Meta, Story } from '@storybook/react/types-6-0'
import { Sidebar, SidebarProps } from '.'

export default {
  title: 'Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'moveit-dark'
    }
  },
  args: {
    handleExit: () => {
      Router.push('/')
    }
  }
} as Meta

export const Default: Story<SidebarProps> = args => <Sidebar {...args} />
