import React from 'react'
import { Meta, Story } from '@storybook/react'
import AlertHeader from './AlertHeader'

export default {
    component: AlertHeader,
    title: `Blocks/Alert Header`,
} as Meta

const Template: Story = (args: any) => <AlertHeader {...args} />

export const Base = Template.bind({})
Base.args = {
    title: 'University closure, January 28, 2021!',
    description:
        'Due to inclement weather the university will be closed January 28, 2019. Please see the <a href="https://carleton.ca/ses/exam-schedule/">updated exam schedule</a>.',
}
