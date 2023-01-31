import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import DatePicker from './DatePicker'
import './DatePicker.css'

export default {
  title: 'UI/DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = (args: any) => <DatePicker {...args} />

export const Primary = Template.bind({})

Primary.args = {}
