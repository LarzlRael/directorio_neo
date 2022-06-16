<<<<<<< HEAD
import React, { lazy, Suspense } from 'react'
import { Header } from '../components/Header'
import { SearchFilter } from '../components/SearchFilter'
import { informationPlacesData } from '../data/infoData'
/* import { InformationPlaces } from '../components/InformationPlaces'; */
import { Loading } from '../components/Loading'
/* const InformationPlaces = lazy(() =>
    import('../components/InformationPlaces'))
    .then(({ InformationPlaces }) => ({ default: InformationPlaces })),
); */
=======
import { lazy, Suspense } from 'react'
import { informationPlacesData } from '../data/infoData'
import { Loading } from '../components/widgets/loadings/Loading'
import { Layout } from '../layout/Layout'
>>>>>>> origin/dev

const InformationPlaces = lazy(() =>
  import('../components/InformationPlaces').then(({ InformationPlaces }) => ({
    default: InformationPlaces,
  })),
)

export const MainPage = () => {
  return (
<<<<<<< HEAD
    <>
      <div className="mainPage">
        <Header />
        <SearchFilter />
      </div>
      <Suspense fallback={<Loading />}>
        {/* <div className="categories"> */}
        <InformationPlaces
          title="Find all places Near you"
          subtitle="this is your subtitle"
          places={informationPlacesData}
        />
        {/* </div> */}

        <InformationPlaces
          title="Whats is happening ? "
          subtitle="Discover events thoughout you"
          places={informationPlacesData}
        />
      </Suspense>
    </>
=======
    <Layout>
      <Suspense fallback={<Loading />}>
        {/* <div className="categories"> */}
        <InformationPlaces
          title="Descubre las pymes"
          subtitle="Todas las categorias"
          places={informationPlacesData}
        />

        {/* <InformationPlaces
                    title="Whats is happening ? "
                    subtitle="Discover events thoughout you"
                    places={informationPlacesData} /> */}
      </Suspense>
    </Layout>
>>>>>>> origin/dev
  )
}
