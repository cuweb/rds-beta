import React from 'react'
import Ublock from '@components/Ublock/Ublock'
import Link from '@components/Link/Link'

export interface ImageTilesProps {
    data: ImageTilesDataProps[]
}

export interface ImageTilesDataProps {
    image: {
        src: string
        alt: string
    }
    title: string
    description?: string
    href: string
}

const ImageTiles: React.FC<ImageTilesProps> = ({ data }): JSX.Element => {
    return (
        <Ublock full>
            <div className='b-imagetile'>
                <div className='imagetile__container'>
                    <Link href={data[0].href} className='imagetile__item'>
                        <img
                            src={data[0].image.src}
                            alt={data[0].image.alt}
                            loading='lazy'
                        />
                        <div className='imagetile__content'>
                            <h3>{data[0].title}</h3>
                            <p>{data[0].description}</p>
                        </div>
                    </Link>
                </div>
                <div className='imagetile__container'>
                    {data.slice(1).map((tile, index) => (
                        <Link
                            key={index}
                            href={tile.href}
                            className='imagetile__item'
                        >
                            <img
                                src={tile.image.src}
                                alt={tile.image.alt}
                                loading='lazy'
                            />
                            <div className='imagetile__content'>
                                <h3>{tile.title}</h3>
                                {tile.description && <p>{tile.description}</p>}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Ublock>
    )
}
export default ImageTiles
