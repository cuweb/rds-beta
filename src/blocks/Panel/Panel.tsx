import React, { ReactNode } from 'react'
import Ublock, { UblockProps } from '@components/Ublock/Ublock'
import Icon from '@components/Icon/Icon'
import MenuPopup from '@components/MenuPopup/MenuPopup'
import { MenuPopupMenuProps } from '@components/MenuPopup/components/MenuPopupMenu'

export interface PanelProps {
    title?: string | undefined
    titleWithHeading?: string | undefined
    children?: ReactNode
    actions?: MenuPopupMenuProps
    icon?: string
    block?: UblockProps
    whiteHeadingColor?: boolean
}

const Panel: React.FC<PanelProps> = (props): JSX.Element => {
    const {
        title,
        children,
        titleWithHeading,
        icon,
        block,
        actions,
        whiteHeadingColor = false,
    } = props
    const whiteHeadingColorClass = whiteHeadingColor
        ? 'b-sidebar__white-heading'
        : ''
    return (
        <Ublock {...block}>
            <div className='b-sidebar'>
                {title && (
                    <h2
                        className={whiteHeadingColorClass}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                )}
                {titleWithHeading && (
                    <h2 className='sidebar__heading'>
                        {icon && <Icon icon={icon} />} {titleWithHeading}
                    </h2>
                )}
                {actions?.menu && (
                    <div className='b-sidebar__actions'>
                        <MenuPopup
                            icon='kebab-hor'
                            className='custom-classname'
                            buttonClassName='button-classname'
                            isButton
                            direction='right'
                            menu={actions.menu}
                        />
                    </div>
                )}
                {children}
            </div>
        </Ublock>
    )
}

export default Panel
