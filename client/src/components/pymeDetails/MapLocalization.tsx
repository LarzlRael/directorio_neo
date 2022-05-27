import React from 'react'

import { MapOutline } from 'react-ionicons'
import ReactMapGL from 'react-map-gl'
import { useDirectionsMap } from '../../hooks/useDirectionsMap'
import { Label } from '../text'
import { H2 } from '../text/H2'
import { P } from '../text/P'

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default

/* const mapboxglAccessToken = process.env.REACT_APP_MAPBOX_KEY; */

interface localizationProps {
  localization: string
  direction: string
}

export const MapLocalization = ({
  localization,
  direction,
}: localizationProps) => {
  const coords = localization.split(',')
  const { viewport, setViewport, mapboxglAccessToken } = useDirectionsMap(
    parseFloat(coords[1]),
    parseFloat(coords[0]),
  )

  return (
    <div className="border-box location">
      <H2
        fontSize="18px"
        fontWeight="500"
        textAlign="start"
        /* color: $title-color; */
        margin=" 0  0 1rem 0 "
      >
        Localización
      </H2>
      <div className="flex info-category">
        <div className="flex icon-info">
          <div className="icono">
            <MapOutline width="20px" height="20px" />
          </div>
          <Label margin="0 0 0 .5rem">Direccion</Label>
        </div>
        <div className="spacer"></div>

        <P color="#7AA4D4" fontSize="14px">
          {direction}
        </P>
      </div>

      <div
        className="map"
        style={{
          width: '100%',
          marginTop: '2rem',
          height: '450px',
        }}
      >
        <a
          href={`https://www.google.com.bo/maps/@${viewport.latitude},${viewport.longitude},17z?hl=es`}
          target="blank"
        >
          <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            onViewportChange={setViewport}
            mapboxApiAccessToken={mapboxglAccessToken}
            mapStyle="mapbox://styles/mapbox/streets-v11"
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
