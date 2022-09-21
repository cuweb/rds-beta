import Link from '@components/Link/Link'
import convertDate from '@functions/convertDate'
import convertTime from '@functions/convertTime'
import React from 'react'
import Icon from '@components/Icon/Icon'
import { ListingHeaderProps } from './components/ListingHeader'
import ListingWrapper from './components/ListingWrapper'

export interface ListingEventProps {
    data: EventListProps[]
    noUblock?: boolean
    lineClamp?: number
    wrapLink?: any
}

export interface EventListProps {
    src: string
    title: string
    description?: string
    date: string
    startTime?: string
    endTime?: string
    icon?: string
}

export interface ImageProps {
    src: string
    alt: string
}

const ListingEvent: React.FC<ListingEventProps & ListingHeaderProps> = ({
    header,
    data,
    noUblock,
    lineClamp = 1,
    wrapLink,
}): JSX.Element => {
    return (
        <ListingWrapper type='event' header={header} noUblock={noUblock}>
            <ul itemScope itemType='http://schema.org/Event'>
                {data.map((item, index) => (
                    <li itemProp='item' key={index}>
                        <Link wrapper={wrapLink} href={item.src}>
                            <time itemProp='startDate' dateTime=''>
                                {convertDate(item.date, 'month')}
                                <span>{convertDate(item.date, 'day')}</span>
                            </time>
                            {(item.startTime || item.endTime) && (
                                <div className='b-listing__hours'>
                                    {item.startTime && (
                                        <h3>{convertTime(item.startTime)}</h3>
                                    )}
                                    {item.endTime && (
                                        <p>{convertTime(item.endTime)}</p>
                                    )}
                                </div>
                            )}
                            <div itemProp='name'>
                                <h3
                                    className={`u-line-clamp u-line-clamp--${lineClamp}`}
                                    itemProp='name'
                                    dangerouslySetInnerHTML={{
                                        __html: item.title,
                                    }}
                                />
                                <div className='withIcon'>
                                    {item.icon && <Icon icon={item.icon} />}
                                    {item.description && (
                                        <p
                                            itemProp='location'
                                            dangerouslySetInnerHTML={{
                                                __html: item.description,
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </ListingWrapper>
    )
}

export default ListingEvent
