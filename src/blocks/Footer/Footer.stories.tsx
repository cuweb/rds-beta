import React from 'react'
import getVariation from '@src/functions/getVariation'
import Footer from './Footer'
import data from './FooterData.json'

const { title, variations } = data

export default {
    component: title,
    title: `Blocks/${title}`,
}

const Template: React.FC = (args: any) => <Footer {...args} />

//  Brand Footer
export const Brand = Template.bind({})
Brand.args = {
    type: getVariation('brand', variations).type,
}

//  Simple Footer
export const Simple = Template.bind({})
Simple.args = {
    type: getVariation('simple', variations).type,
}

//  Sitemap Footer
export const Sitemap = Template.bind({})
Sitemap.args = {
    type: getVariation('sitemap', variations).type,
}
