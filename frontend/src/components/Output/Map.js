import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow, } from '@react-google-maps/api';


const containerStyle = {
  width: '1057px',
  height: '900px'
};

const center = {
  lat: 1.25,
  lng: 16
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCysiv9M6i6-XZaCjuJFFQR0EWtJqMC0k0"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)