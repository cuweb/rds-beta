import React from 'react'
import Ublock from '@components/Ublock/Ublock'

export interface TextImageProps {
    direction?: string
    title?: string
    image: HTMLImageElement
    content: string
    subcontent: string
    color?: 'grey' | 'white' | 'black'
    heading?: string
    subheading?: string
    centered?: boolean
    children?: React.ReactNode
}
const TextImage: React.FC<TextImageProps> = ({
    direction,
    title,
    image,
    content,
    subcontent,
    color,
    heading,
    subheading,
    centered,
}): JSX.Element => {
    const directionClassname = direction === 'left' ? `b-textimg--imgtext` : ''
    const centeredClasaname = centered ? `c-heading--center` : ''

    return (
        <Ublock color={color}>
            {heading && (
                <h2
                    className={`c-heading- ${centeredClasaname}`}
                    dangerouslySetInnerHTML={{ __html: heading }}
                />
            )}
            {subheading && (
                <p dangerouslySetInnerHTML={{ __html: subheading }} />
            )}
            <div className={`b-textimg ${directionClassname}`}>
                <div className='textimg__wrapper'>
                    <section>
                        {title && (
                            <h2 dangerouslySetInnerHTML={{ __html: title }} />
                        )}
                        <img src={image.src} alt={image.alt} />
                        <div className='textimg__text'>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: content,
                                }}
                            />
                            {subcontent && (
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: subcontent,
                                    }}
                                />
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </Ublock>
    )
}
export default TextImage
