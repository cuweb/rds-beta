import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import Login from './Login'
import Overlay from '@src/layouts/Overlay/Overlay'

export default {
    component: Login,
    title: `Blocks/Login`,
} as Meta

const Template: Story = (args: any) => {
    return <Login {...args} />
}

const DialogTemplate: Story = (args: any) => {
    const [isHidden, setIsHidden] = useState(true)
    return (
        <div className='example'>
            <button
                className='c-buttoncta'
                onClick={(e) => setIsHidden(!isHidden)}
            >
                Open Dialog
            </button>
            <Overlay
                isHidden={isHidden}
                type='banner'
                className='custom__class'
            >
                <Login {...args} />
            </Overlay>
        </div>
    )
}
export const BaseLogin = Template.bind({})

BaseLogin.args = {
    onSubmit: (e: any) => {
        e.preventDefault()
        alert('Login form submited!')
    },
}

export const WithTitle = Template.bind({})

WithTitle.args = {
    title: 'Login Title',
    onSubmit: (e: any) => {
        e.preventDefault()
        alert('Login form submited!')
    },
}

export const WithForgetLink = Template.bind({})

WithForgetLink.args = {
    forgetLink: 'https://myone.carleton.ca/',
    onSubmit: (e: any) => {
        e.preventDefault()
        alert('Login form submited!')
    },
}

export const InDialogue = DialogTemplate.bind({})

InDialogue.args = {
    title: 'Login Title',
    onSubmit: (e: any) => {
        e.preventDefault()
        alert('Login form submited!')
    },
}
