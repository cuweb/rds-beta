import React from 'react'
import Toast from './Toast'
import { Meta, Story } from '@storybook/react'

export default {
    component: Toast,
    title: 'Components/Toast',
} as Meta

const Template: Story = (args: any) => <Toast {...args} />

export const InformationToastDefault = Template.bind({})
InformationToastDefault.args = {
    position: 'default',
    alertType: 'info',
    title: 'Information alert',
    content: 'Used to highlight <a href="#">informational content</a>.',
}

export const InformationToastTopRight = Template.bind({})
InformationToastTopRight.args = {
    position: 'top-right',
    alertType: 'info',
    title: 'Information alert',
    content: 'Used to highlight <a href="#">informational content</a>.',
}

export const InformationToastTopLeft = Template.bind({})
InformationToastTopLeft.args = {
    position: 'top-left',
    alertType: 'info',
    title: 'Information alert',
    content: 'Used to highlight <a href="#">informational content</a>.',
}

export const InformationToastBottomRight = Template.bind({})
InformationToastBottomRight.args = {
    position: 'bottom-right',
    alertType: 'info',
    title: 'Information alert',
    content: 'Used to highlight <a href="#">informational content</a>.',
}

export const InformationToastBottomLeft = Template.bind({})
InformationToastBottomLeft.args = {
    position: 'bottom-left',
    alertType: 'info',
    title: 'Information alert',
    content: 'Used to highlight <a href="#">informational content</a>.',
}

export const SuccessToastDefault = Template.bind({})
SuccessToastDefault.args = {
    position: 'default',
    alertType: 'success',
    title: 'Upload success',
    content: 'Your <a href="#">document</a> was uploaded successfully.',
}

export const SuccessToastTopRight= Template.bind({})
SuccessToastTopRight.args = {
    position: 'top-right',
    alertType: 'success',
    title: 'Upload success',
    content: 'Your <a href="#">document</a> was uploaded successfully.',
}

export const SuccessToastTopLeft= Template.bind({})
SuccessToastTopLeft.args = {
    position: 'top-left',
    alertType: 'success',
    title: 'Upload success',
    content: 'Your <a href="#">document</a> was uploaded successfully.',
}

export const SuccessToastBottomRight= Template.bind({})
SuccessToastBottomRight.args = {
    position: 'bottom-right',
    alertType: 'success',
    title: 'Upload success',
    content: 'Your <a href="#">document</a> was uploaded successfully.',
}

export const SuccessToastBottomLeft= Template.bind({})
SuccessToastBottomLeft.args = {
    position: 'bottom-left',
    alertType: 'success',
    title: 'Upload success',
    content: 'Your <a href="#">document</a> was uploaded successfully.',
}

export const WarningToastDefault = Template.bind({})
WarningToastDefault.args = {
    position: 'default',
    alertType: 'warning',
    title: 'Outdoor event',
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
}

export const WarningToastTopRight = Template.bind({})
WarningToastTopRight.args = {
    position: 'top-right',
    alertType: 'warning',
    title: 'Outdoor event',
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
}

export const WarningToastTopLeft = Template.bind({})
WarningToastTopLeft.args = {
    position: 'top-left',
    alertType: 'warning',
    title: 'Outdoor event',
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
}

export const WarningToastBottomRight = Template.bind({})
WarningToastBottomRight.args = {
    position: 'bottom-right',
    alertType: 'warning',
    title: 'Outdoor event',
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
}

export const WarningToastBottomLeft = Template.bind({})
WarningToastBottomLeft.args = {
    position: 'bottom-left',
    alertType: 'warning',
    title: 'Outdoor event',
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
}

export const ErrorToastDefault = Template.bind({})
ErrorToastDefault.args = {
    position: 'default',
    alertType: 'error',
    title: 'Error Alert',
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: (e: any) => alert('test'),
}

export const ErrorToastTopRight = Template.bind({})
ErrorToastTopRight.args = {
    position: 'top-right',
    alertType: 'error',
    title: 'Error Alert',
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: (e: any) => alert('test'),
}

export const ErrorToastTopLeft = Template.bind({})
ErrorToastTopLeft.args = {
    position: 'top-left',
    alertType: 'error',
    title: 'Error Alert',
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: (e: any) => alert('test'),
}

export const ErrorToastBottomRight = Template.bind({})
ErrorToastBottomRight.args = {
    position: 'bottom-right',
    alertType: 'error',
    title: 'Error Alert',
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: (e: any) => alert('test'),
}

export const ErrorToastBottomLeft = Template.bind({})
ErrorToastBottomLeft.args = {
    position: 'bottom-left',
    alertType: 'error',
    title: 'Error Alert',
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: (e: any) => alert('test'),
}