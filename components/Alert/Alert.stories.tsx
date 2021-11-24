import React from 'react'
import Alert from './Alert'

export default {
    component: Alert,
    title: 'Components/Alert',
}

const Template = (args) => <Alert {...args} />

export const Error = Template.bind({})
Error.args = {
    type: 'error',
    title: 'Error Alert',
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: (e) => alert('test'),
}

export const Information = Template.bind({})
Information.args = {
    type: 'info',
    title: 'Information alert',
    content: 'Used to highlight <a href="#">informational content</a>.',
}

export const Success = Template.bind({})
Success.args = {
    type: 'success',
    title: 'Upload success',
    content: 'Your <a href="#">document</a> was uploaded successfully.',
}

export const Warning = Template.bind({})
Warning.args = {
    type: 'warning',
    title: 'Outdoor event',
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
}
