import React from 'react'
import Icon from '@components/Icon/Icon'

export interface ButtonProps {
    ghost?: boolean
    text: string
    link: string
    icon?: string
    full?: boolean
    center?: boolean
    children?: React.ReactNode
    target?: string
    grey?: boolean
}

const ButtonCTA: React.FC<ButtonProps> = ({
    ghost,
    center,
    text = 'Click',
    link = '#',
    icon,
    full,
    children,
    target,
    grey,
}): JSX.Element => {
    const isGhost = ghost ? 'c-buttoncta--ghost' : ''
    const isGrey = grey ? 'c-buttoncta--grey' : ''
    const isFull = full ? 'c-buttoncta--full' : ''
    const hasIcon = icon ? 'u-icon' : ''
    const isCenter = center ? 'c-buttoncta--center' : ''
    const buttonTarget = target ? `_${target}` : undefined

    return (
        <a
            className={`c-buttoncta ${hasIcon} ${isFull} ${isGhost} ${isGrey} ${isCenter}`}
            target={buttonTarget}
            href={link}
        >
            {icon && <Icon icon={icon} />}
            {children}
            {text}
        </a>
    )
}
export default ButtonCTA
