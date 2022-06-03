import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoadingPage } from '../pages/LoadingPage'
import { Footer } from '../layout/Footer'
import ScrollToTop from '../layout/ScrollTop'

/* import { PlaceDetails } from '../components/PlaceDetails'; */

const PymeDetails = lazy(() =>
  import('../components/PymeDetails').then(({ PymeDetails }) => ({
    default: PymeDetails,
  })),
)
const MainPage = lazy(() =>
  import('../pages/MainPage').then(({ MainPage }) => ({ default: MainPage })),
)
const SingleLocation = lazy(() =>
  import('../pages/SingleLocation').then(({ SingleLocation }) => ({
    default: SingleLocation,
  })),
)

export const NavigatorMain = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={MainPage} />

          {/* <Route path="/loading" exact component={LoadingPage} /> */}
          <Route
            path="/productos/:title/:nombre"
            exact
            component={PymeDetails}
          />
          <Route path="/productos/:title" exact component={SingleLocation} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  )
}
