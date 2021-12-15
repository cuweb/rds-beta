import React from 'react'
import Icon from '@src/components/Icon/Icon'

interface ButtonProps {
    ghost?: string
    text: string
    link: string
    icon?: string
    full?: string
    children?: React.ReactNode
    target?: string
}

const ButtonCTA: React.FC<ButtonProps> = ({
    ghost,
    text = 'Click',
    link = '#',
    icon,
    full,
    children,
    target,
}): JSX.Element => {
    const isGhost = ghost ? 'c-buttoncta--ghost' : ''
    const isFull = full ? 'c-buttoncta--full' : ''
    const hasIcon = icon ? 'u-icon' : ''
    const buttonTarget = target ? `_${target}` : undefined

    return (
        <a
            className={`c-buttoncta ${hasIcon} ${isFull} ${isGhost}`}
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
