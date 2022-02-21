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
  width: "41.5vw",
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
  
  const [ selected, setSelected ] = React.useState(null);
  console.log(selected)

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={3.65}
        center={center}
        
      >
        {checked.map(marker => 
          marker.locArray.map(row => 
          <Marker
          key={row.locationID}
          position={{lat: row.lat, lng: row.lon}}
          onClick={() => {
            setSelected(row)
          }}
          />
          ))}

          //if selected state has a value, if not do a null
          {selected ? (
          <InfoWindow 
          position={{ lat: selected.lat, lng: selected.lon }} 
          onCloseClick = {() => {
            setSelected(null);
          }}
          > 
            <div>
            <div><b>Location Name:</b> {selected.locationName}</div>
            <div><b>Country:</b> {selected.locality}</div>
            <p></p>
            <div><b>Haplotype:</b> {selected.haplotypeId}</div>
            <div><b>Matches:</b> {selected.match}</div>
            <div><b>Mismatches:</b> {selected.mismatch}</div>
            <div><b>Author:</b> {selected.author}</div>
            </div>
          </InfoWindow>) : null}
      </GoogleMap>
    </div>
  );
}

export default Map;

