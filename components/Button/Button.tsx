// import { useButton } from '@react-aria/button'
import React, { useRef } from 'react';
import Icon from '@components/Icon/Icon';

interface ButtonProps {
    ghost?: string,
    text: string,
    link: string,
    icon?: string,
    full?: string,
    children: React.ReactNode,
    target: string,

};

const Button: React.FC<ButtonProps> = ({
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

    const ref = useRef()
    // const { linkButtons } = useButton(props, ref)

    return (
        <a
            // {...linkButtons}
            ref={ref}
            className={`c-buttoncta ${hasIcon} ${isFull} ${isGhost}`}
            target={`_${target}`}
            href={link}
        >
            {icon && <Icon icon={icon} />}
            {children}
            {text}
        </a>
    )
}
export default Button
