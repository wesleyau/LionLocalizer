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

import unfilledPin from '../../../static/images/redpin.png';
import filledPin from '../../../static/images/blackpin.png';

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
  const alignList = useSelector(state => state.align.align.array)
  const countryList = [47, 60, 69, 119, 125, 137, 165, 166, 167, 182, 183, 184, 185, 187, 190, 191, 192, 238]
  //console.log(checked)
  

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  
  //whether the pinpoint is selected or not
  const [ selected, setSelected ] = React.useState(null);

  //comparing which points are not checked so that the placer marker appears
  let result = alignList.filter(item => checked.indexOf(item) == -1);
  //console.log(result)

  //array for no country info
  let countryResult = result.filter(item => countryList.includes(item.locationID));
  //console.log(countryResult)

  //array for both country and locality info
  let localityResult = result.filter(item => !countryList.includes(item.locationID));
  //console.log(localityResult)

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={3.60}
        center={center}
        
      >
        //filledpins for both country and locality info
        {countryResult.map(row => 
          <Marker
          key={row.locationID}
          position={{lat: row.lat, lng: row.lon}}
          icon={{
            url: filledPin,
            scaledSize: new window.google.maps.Size(20,20),}}
          onClick={() => {
            setSelected(row)
          }}
          />
          )}

        //unfilledpin for no country info
        {localityResult.map(row => 
          <Marker
          key={row.locationID}
          position={{lat: row.lat, lng: row.lon}}
          icon={{
            url: unfilledPin,
            scaledSize: new window.google.maps.Size(20,20),}}
          onClick={() => {
            setSelected(row)
          }}
          />
          )}

        {checked.map(row => 
          <Marker
          key={row.locationID}
          position={{lat: row.lat, lng: row.lon}}
          onClick={() => {
            setSelected(row)
          }}
          />
          )}

          //if selected state has a value, if not do a null
          {selected ? (
          <InfoWindow 
          position={{ lat: selected.lat, lng: selected.lon }} 
          onCloseClick = {() => {
            setSelected(null);
          }}
          > 
            <div>
            <div><b>Location ID:</b> {selected.locationID}</div>
            <div><b>Locality Type:</b> {selected.locationType}</div>
            <div><b>Locality:</b> {selected.locationName}</div>
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

