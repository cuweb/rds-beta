import React from 'react'
import Icon from '@components/Icon/Icon'
import Link from '@components/Link/Link'
import CardImage, { CardImageProps } from './components/CardImage'
import CardTitle from './components/CardTitle'

export interface CardVideoProps {
    link: string
    image: CardImageProps
    header: string
    children?: React.ReactNode
}

const CardVideo: React.FC<CardVideoProps & CardImageProps> = ({
    link,
    image,
    header,
}): JSX.Element => (
    <article
        className='c-card c-card--video'
        itemScope
        itemType='http://schema.org/VideoObject'
    >
        <Link href={link}>
            <CardImage image={image}>
                <span className='u-icon u-icon--circle' aria-hidden='true'>
                    <Icon icon='video-card' />
                </span>
            </CardImage>
            <header>
                <CardTitle>{header}</CardTitle>
            </header>
        </Link>
    </article>
)
export default CardVideo
