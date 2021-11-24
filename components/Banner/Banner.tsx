import Ublock from '@components/Ublock/Ublock'
import BannerBreadcrumbs from './components/BannerBreadcumbs'

interface BannerProps {
    title: string,
    breadcrumbs: string,
    color: string,
};

const Banner: React.FC<BannerProps> = (props: any): JSX.Element => {
    const { title, breadcrumbs, color = 'grey' } = props
    return (
        <Ublock color={color}>
            <div className="b-banner">
                <section>
                    {breadcrumbs && <BannerBreadcrumbs links={breadcrumbs} />}
                    {title && (
                        <h1 dangerouslySetInnerHTML={{ __html: title }} />
                    )}
                </section>
            </div>
        </Ublock>
    )
}
export default Banner
