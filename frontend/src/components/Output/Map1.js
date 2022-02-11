import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import { useDispatch, useSelector } from 'react-redux';
import { getSequences } from '../../Sequences/Sequences.actions';

const libraries = ["places"];
const mapContainerStyle = {
  height: "775px",
  width: "49.5vw",
};
const center = {
    lat: 1,
    lng: 17
};


const Map = (props) => {

    const alignList = useSelector(state => state.align.align.array)

    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });




  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={3.8}
        center={center}
        
      >
        
      </GoogleMap>
    </div>
  );
}

export default Map;

