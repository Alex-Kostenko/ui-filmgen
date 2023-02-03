import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Input from './Input'
import './Input.css'

export default {
  title: 'UI/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Continue',
}
