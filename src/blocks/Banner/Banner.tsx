import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'
import BannerBreadcrumbs from './components/BannerBreadcumbs'

interface BannerProps {
    title: string
    breadcrumbs: { link: string; title: string }[]
    children: React.ReactNode
    imageUrl?: string
    imagePosition?: 'top' | 'bottom'
    isDark?: boolean
}

const Banner: React.FC<BannerProps> = ({
    title,
    breadcrumbs,
    children,
    imageUrl,
    imagePosition,
    isDark,
}): JSX.Element => {
    const bannerColor = imageUrl ? 'black' : 'grey'
    const bannerWidth = !!imageUrl
    const bannerImage = imageUrl ? 'b-banner--img' : ''
    const bannerBrightness = isDark ? 'b-banner--img-dark' : ''
    const bannerImagePosition = imagePosition
        ? `b-banner--img-${imagePosition}`
        : ''

    const bannerStyles = {
        backgroundImage: `url(${imageUrl})`, // TODO: styled components?
    }

    return (
        <Ublock color={bannerColor} full={bannerWidth}>
            <div
                className={`b-banner ${bannerImage} ${bannerBrightness} ${bannerImagePosition}`}
                style={bannerStyles}
            >
                <section>
                    {breadcrumbs && (
                        <BannerBreadcrumbs title={title} links={breadcrumbs} />
                    )}
                    <h1 dangerouslySetInnerHTML={{ __html: title }} />
                    {children}
                </section>
            </div>
        </Ublock>
    )
}

export default Banner
