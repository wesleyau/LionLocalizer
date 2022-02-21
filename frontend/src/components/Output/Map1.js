import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
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


const Map = ({checked}) => {

 
  console.log(checked)
    

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
        {checked.map(marker => 
          marker.locArray.map(row => 
          <Marker
          key={row.locationID}
          position={{lat: row.lat, lng: row.lon}}
          />
          ))}
      </GoogleMap>
    </div>
  );
}

export default Map;

