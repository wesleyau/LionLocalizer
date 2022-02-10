import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -1,
  lng: 17
};
const position1 = {
  lat: 1.25,
  lng: 16
}
const position2 = {
  lat: 5.25,
  lng: 17
}
const position3 = {
  lat: -5.25,
  lng: 18
}

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}

function Map() {
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState([null])

  const onLoad = marker => {
    console.log('marker: ', marker)
  }

  const onLoadWindow = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3.8}
      >
        <Marker
          onLoad={onLoad}
          position={position1}
          onClick ={() => {
            setSelected(position1)
          }}
        />
        <Marker
          onLoad={onLoad}
          position={position2}
          onClick ={() => {
            setSelected(position2)
          }}
        />
        <Marker
          onLoad={onLoad}
          position={position3}
          onClick ={() => {
            setSelected(position3)
          }}
        />
        {/*}
        {selected ? (
        <InfoWindow 
        onLoad={onLoadWindow}
          position={{ lat: selected.lat, lng: selected.lng }} 
          onCloseClick={() => {
          setSelected(null);
        }}
        >
          <div>
            <h2>Location Name:</h2>
            <h2>Location Type:</h2>
            <h2>Country:</h2>
            <h2>Closest match at location:</h2>
            <h2>Haploytype:</h2>
            <h2>Matches:</h2>
            <h2>Mismatches:</h2>
            <h2>Author(s):</h2>
          </div>
          </InfoWindow>
        ) : null} */}
        { /* Child components, such as markers, info windows, etc. */ }
        <></>

      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)