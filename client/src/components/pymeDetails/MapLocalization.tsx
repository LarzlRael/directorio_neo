import React from 'react'

import { MapOutline, } from 'react-ionicons';
import ReactMapGL from 'react-map-gl';
import { useDirectionsMap } from '../../hooks/useDirectionsMap';

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


/* const mapboxglAccessToken = process.env.REACT_APP_MAPBOX_KEY; */

interface localizationProps {
    localization: string;
    direction: string;
}

export const MapLocalization = ({ localization, direction }: localizationProps) => {

    const coords = localization.split(',');
    const {
        viewport,
        setViewport,
        mapboxglAccessToken
    } = useDirectionsMap(parseInt(coords[1]), parseInt(coords[0]));


    return (
        <div className="border-box location">
            <label className="title-content">Localizacion</label>

            <div className="flex info-category">
                <div className="flex icon-info">
                    <div className="icono">
                        <MapOutline
                            width="20px"
                            height="20px"
                        />
                    </div>
                    <label htmlFor=""
                        style={{
                            marginLeft: '0.5rem'
                        }}
                    >Direccion </label>
                </div>
                <div className=""
                    style={{
                        width: '100%',
                    }}
                ></div>

                <div className="">{direction}</div>
            </div>

            <div className="map"

                style={{
                    width: '100%',
                    marginTop: '2rem',
                    height: '450px',
                }}
            >
                <a href={`https://www.google.com.bo/maps/@${viewport.latitude},${viewport.longitude},17z?hl=es`} target="blank">

                    <ReactMapGL
                        {...viewport}
                        width="100%"
                        height="100%"
                        onViewportChange={setViewport}
                        mapboxApiAccessToken={mapboxglAccessToken}
                        mapStyle='mapbox://styles/mapbox/streets-v11'
                    >
                        {/* <Marker
                        latitude={viewport.latitude}
                        longitude={viewport.longitude}
                        >
                        <Navigate
                        width="30px"
                        height="30px"
                        />
                    </Marker> */}
                    </ReactMapGL>
                </a>

            </div>
        </div>
    )
}
