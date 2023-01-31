import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Tag from './Tag'

export default {
  title: 'UI/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const small = Template.bind({})

small.args = {
  label: 'Romance',
  className: 'tag-small',
}

export const medium = Template.bind({})

medium.args = {
  label: 'Romance',
  className: 'tag-medium',
}

export const large = Template.bind({})

large.args = {
  label: 'Romance',
  className: 'tag-large',
}
