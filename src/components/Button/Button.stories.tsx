import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Button from './Button'
import './Button.css'

export default {
  title: 'UI/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Continue',
  // eslint-disable-next-line
  onClick: () => console.log('1'),
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'BTN',
  // eslint-disable-next-line
  onMouseOver: () => console.log('q'),
}
