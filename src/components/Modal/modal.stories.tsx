import Masthead from '@blocks/Masthead/Masthead'
import PanelBody from '@blocks/Panel/components/PanelBody'
import PanelFooter from '@blocks/Panel/components/PanelFooter'
import PanelHeader from '@blocks/Panel/components/PanelHeader'
import Panel from '@blocks/Panel/Panel'
import Avatar from '@components/Avatar/Avatar'
import ButtonCTA from '@components/ButtonCTA/ButtonCTA'
import Ugrid from '@components/Ugrid/Ugrid'
import useEscToClose from '@hooks/useEscKey'
import useOnClickOutside from '@hooks/useOnClickOutside'
import Overlay from '@layouts/Overlay/Overlay'
import React, { useRef, useState } from 'react'
import UserSettings from './IntranetModalExample/UserSetting'

export default {
    component: Overlay,
    title: 'Components/Modal',
}

export const IntranetSettingModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    const user = {
        image: {
            src: 'https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg',
            alt: '',
        },
        firstName: 'Danny',
        lastName: 'Brown',
    }

    const modalRef = useRef(null)

    useOnClickOutside(modalRef, () => setModalIsOpen(false))
    useEscToClose(modalRef, () => setModalIsOpen(false))

    return (
        <>
            <Masthead
                title={'Ravens Design System'}
                url={'https://github.com/cuweb/rds-ui'}
            />
            <Ugrid isLayout>
                <Ugrid columns={1}>
                    <Panel>
                        <PanelHeader color='white'>Profile</PanelHeader>
                        <PanelBody>
                            <div
                                onClick={() => {
                                    setModalIsOpen(true)
                                }}
                            >
                                <Avatar
                                    user={user}
                                    rounded
                                    className='u-margin-auto'
                                />
                            </div>
                            {modalIsOpen && (
                                <Overlay trasparentBackground>
                                    <div ref={modalRef}>
                                        <UserSettings />
                                    </div>
                                </Overlay>
                            )}
                        </PanelBody>
                        <PanelFooter>
                            <ButtonCTA
                                link=''
                                text='View Profile'
                                grey
                                shadow={false}
                                full
                            />
                        </PanelFooter>
                    </Panel>
                </Ugrid>
                <Ugrid columns={1}></Ugrid>
            </Ugrid>
        </>
    )
}

export const Modal = () => {
    const modalRef = useRef(null)

    useOnClickOutside(modalRef, () => setModalIsOpen(false))
    useEscToClose(modalRef, () => setModalIsOpen(false))

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    return (
        <>
            <Ugrid columns={1}>
                <div>
                    <button
                        className='c-buttoncta'
                        onClick={(e) => setModalIsOpen(!modalIsOpen)}
                    >
                        Open Modal
                    </button>
                </div>
                {modalIsOpen && (
                    <Overlay>
                        <div ref={modalRef}>
                            <Panel>
                                <PanelHeader>Modal</PanelHeader>
                                <PanelBody>
                                    <p className='text-center'>Modal Content</p>

                                    <div>
                                        <button
                                            className='c-buttoncta '
                                            onClick={(e) =>
                                                setModalIsOpen(!modalIsOpen)
                                            }
                                        >
                                            Close Dialog
                                        </button>
                                    </div>
                                </PanelBody>
                            </Panel>
                        </div>
                    </Overlay>
                )}
            </Ugrid>
        </>
    )
}
