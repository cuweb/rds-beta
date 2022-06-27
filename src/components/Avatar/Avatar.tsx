import { UserInfoType } from 'types/UserInfo'
import React, { ReactNode } from 'react'

export interface IAvatar {
    className?: string
    rounded?: boolean
    noBorder?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl'
    user: UserInfoType
    caption?: ReactNode
    handleClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Avatar: React.FC<IAvatar> = ({
    size = 'xl',
    className = '',
    user,
    noBorder = false,
    rounded,
    caption,
    handleClick,
}): JSX.Element => {
    const { firstName, lastName, image } = user
    const initials =
        !image && `${firstName.split('')[0]} ${lastName.split('')[0]}`

    const roundedClassName = rounded ? 'c-avatar--rounded' : ''
    const noBorderClassName = noBorder ? 'c-avatar--no-border' : ''
    const hasHandleClick = handleClick ? 'c-avatar--pointer' : ''
    return (
        <div
            className={`c-avatar c-avatar--${size} ${hasHandleClick} ${roundedClassName} ${noBorderClassName} ${className}`}
        >
            <figure className='c-avatar__figure'>
                {image && (
                    <img
                        src={image.src}
                        alt={image.alt || `Avatar of ${firstName} ${lastName}`}
                        className='c-avatar__image'
                        onClick={handleClick}
                        aria-hidden='true'
                    />
                )}
                {initials && (
                    <div
                        className='c-avatar__info'
                        onClick={handleClick}
                        aria-hidden='true'
                    >
                        {initials}
                    </div>
                )}
                {caption && (
                    <figcaption className='c-avatar__caption'>
                        {caption}
                    </figcaption>
                )}
            </figure>
        </div>
    )
}

export default Avatar
