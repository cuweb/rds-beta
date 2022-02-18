import React from 'react'
import LinkWrapper from '@components/LinkWrapper/LinkWrapper'

export interface FigureVariantCardProps {
    link?: string
    description: string
    caption: string
}

const FigureVariantCard: React.FC<FigureVariantCardProps> = ({
    link,
    description,
    caption,
}): JSX.Element => (
    <article
        className='c-card c-card--figure'
        itemScope
        itemType='http://schema.org/QuantitativeValue'
    >
        <LinkWrapper link={link}>
            <figure>
                <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
                <p itemProp='description'>{description}</p>
            </figure>
        </LinkWrapper>
    </article>
)
export default FigureVariantCard
