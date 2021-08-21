import { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Page2 } from "../pages/Page2";
import { Footer } from '../components/Footer';
import ScrollToTop from '../hooks/scrollTop';

/* import { PlaceDetails } from '../components/PlaceDetails'; */
import { Loading } from '../components/Loading';

const PlaceDetails = lazy(() =>
    import('../components/PlaceDetails')
        .then(({ PlaceDetails }) => ({ default: PlaceDetails })),
);
const MainPage = lazy(() =>
    import('../pages/MainPage')
        .then(({ MainPage }) => ({ default: MainPage })),
);
const SingleLocation = lazy(() =>
    import('../pages/SingleLocation')
        .then(({ SingleLocation }) => ({ default: SingleLocation })),
);


export const NavigatorMain = () => {

    return (
        <Router>
            <Suspense fallback={<Loading />}>
            <ScrollToTop />
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/otrapagina" exact component={Page2} />
                    <Route path="/single-location/:title/details/:id" exact component={PlaceDetails} />
                    <Route path="/single-location/:title" exact component={SingleLocation} />
                </Switch>
            </Suspense>
            <Footer />

        </Router >
    )

}