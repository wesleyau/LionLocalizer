import React from "react";
import { AppBar, Toolbar, Typography, Grid} from "@material-ui/core";
import {GoogleMap, useJsApiLoader, Marker, InfoWindow,} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

const containerStyle = {
    width: '1250px',
    height: '900px'
};
  
const center = {
lat: 9.1021,
lng: 0
};
  
const tempMap = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCysiv9M6i6-XZaCjuJFFQR0EWtJqMC0k0"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>
}
  
export default React.memo(tempMap)