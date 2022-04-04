import { lazy, Suspense } from 'react'
import { informationPlacesData } from '../data/infoData'
import { Loading } from '../components/widgets/loadings/Loading'
import { Layout } from '../layout/Layout'

const InformationPlaces = lazy(() =>
  import('../components/InformationPlaces').then(({ InformationPlaces }) => ({
    default: InformationPlaces,
  })),
)

export const MainPage = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        {/* <div className="categories"> */}
        <InformationPlaces
          title="Descubre"
          subtitle="Todas las categorias que tenemos"
          places={informationPlacesData}
        />

        {/* <InformationPlaces
                    title="Whats is happening ? "
                    subtitle="Discover events thoughout you"
                    places={informationPlacesData} /> */}
      </Suspense>
    </Layout>
  )
}
