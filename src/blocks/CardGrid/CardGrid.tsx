import React from 'react'
import Ublock from '@components/Ublock/Ublock'
import Ugrid from '@components/Ugrid/Ugrid'
import ButtonCTA from '@components/ButtonCTA/ButtonCTA'

export interface CardGridProps {
    title?: string
    columns?: 1 | 2 | 3 | 4 | undefined
    button?: ButtonProps
    wrapLink?: any
    color?: 'grey' | 'white' | 'black' | undefined
    children?: React.ReactNode
    handleLoad?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

interface ButtonProps {
    url: string
    text: string
}

const CardGrid: React.FC<CardGridProps> = ({
    title,
    button,
    columns = 3,
    color,
    wrapLink,
    children,
    handleLoad,
}): JSX.Element => {
    return (
        <Ublock color={color}>
            {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
            <Ugrid className='b-cardgrid' columns={columns}>
                {children}
            </Ugrid>
            {button && (
                <ButtonCTA
                    wrapLink={wrapLink}
                    text={button.text}
                    link={button.url}
                    center
                />
            )}
            {handleLoad && (
                <button
                    type='button'
                    className='c-buttoncta c-buttoncta--center'
                    onClick={(e: never) => handleLoad(e)}
                >
                    Load more
                </button>
            )}
        </Ublock>
    )
}

export default CardGrid
