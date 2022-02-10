import React from 'react'
import { Meta } from '@storybook/react'
import Masthead from './Masthead'

export default {
    component: Masthead,
    title: `Blocks/Masthead`,
} as Meta

const args = {
    title: 'Ravens Design System',
    url: 'https://github.com/cuweb/rds-beta',
    brand: 'https://sprott.carleton.ca/wp-content/uploads/CU_Sprott_Logo_Primary_RBG_Red_Black_on_lightBG_300-1024x343.jpg',
    menu: [
        {
            text: 'Item 1',
            link: '/',
            subMenu: [
                {
                    text: 'Item 1.1',
                    link: '/',
                },
                {
                    text: 'Item 1.2',
                    link: '/',
                },
            ],
        },
        {
            text: 'Item 2',
            link: '/',
        },
        {
            text: 'Item 3',
            link: '/',
        },
        {
            text: 'Item 4',
            link: '/',
        },
    ],
}

export const Base = () => <Masthead title={args.title} url={args.url} />
export const BrandLogo = () => (
    <Masthead title={args.title} url={args.url} brand={args.brand} />
)
export const WithMenu = () => (
    <Masthead title={args.title} url={args.url} menu={args.menu} />
)
