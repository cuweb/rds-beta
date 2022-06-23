/* eslint-disable jsx-a11y/click-events-have-key-events */
import Icon from '@components/Icon/Icon'
import React from 'react'

interface IActionsComponent {
    // eslint-disable-next-line @typescript-eslint/ban-types
    handleClick?: Function
}

export const ActionsComponent: React.FC<IActionsComponent> = ({
    handleClick,
}): JSX.Element => {
    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <span onClick={() => handleClick}>
            <Icon icon='X' className='u-margin-left-10 ' />
        </span>
    )
}