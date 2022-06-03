import { MenuPopupMenuProps } from '@components/MenuPopup/components/MenuPopupMenu'
import MenuPopup from '@components/MenuPopup/MenuPopup'
import React, { FC, ReactNode } from 'react'

export interface PanelActionComponentProps {
    className?: string
    actionComponent: ReactNode
}

const PanelActionComponent: FC<PanelActionComponentProps> = ({
    className = '',
    actionComponent,
}): JSX.Element => {
    return (
        <div className={`b-sidebar__actions ${className}`}>
            {actionComponent}
        </div>
    )
}
export default PanelActionComponent
