/**
 * @name UserSettings
 * @desc description here
 * @param {} param desc
 * @returns returns desc
 */

import React, { useState } from 'react'
import EditUser from './EditUser'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IUserSettings {}

const UserSettings: React.FC<IUserSettings> = (): JSX.Element => {
    const [currentView, setCurrentView] = useState('personal')

    // useOnClickOutside(modalRef, () => setModalIsOpen(false))
    // useEscToClose(modalRef, () => setModalIsOpen(false))

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const views: { [key: string]: any } = {
        personal: {
            title: 'Personal User Settings',
            content: <EditUser />,
        },
        applications: {
            title: 'Applications',
            // content: <EditResourceList resourceType='application' />,
            content: <p className='u-margin-auto'> Hello from Applications</p>,
        },
        links: {
            title: 'Links',
            // content: <EditResourceList resourceType='link' />,
            content: (
                <p className='u-margin-auto'> Hello from Link Applications</p>
            ),
        },
    }

    return (
        <div className='u-settings-layout'>
            <div className='u-settings-sideBar'>
                <h3> Settings</h3>
                <ul>
                    <li
                        onClick={() => setCurrentView('personal')}
                        aria-hidden='true'
                    >
                        User Settings
                    </li>
                    <li
                        onClick={() => setCurrentView('applications')}
                        aria-hidden='true'
                    >
                        Applications
                    </li>
                    <li
                        onClick={() => setCurrentView('links')}
                        aria-hidden='true'
                    >
                        Links
                    </li>
                </ul>
            </div>
            <div className='u-settings-content'>
                {views[currentView].content}
            </div>
        </div>
    )
}

export default UserSettings
