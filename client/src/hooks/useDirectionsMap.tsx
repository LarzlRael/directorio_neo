import { useState } from 'react';

export const useDirectionsMap = (longitude: number, latitude: number, zoom = 16) => {

    const mapboxglAccessToken = process.env.REACT_APP_MAPBOX_KEY;

    const [viewport, setViewport] = useState({
        /* -16.534593, -68.190434 */
        longitude,
        latitude,
        zoom
    });

    return {
        viewport,
        setViewport,
        mapboxglAccessToken
    };
};
