import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from "@react-google-maps/api";

import { useDispatch, useSelector } from 'react-redux';
import { getSequences } from '../../Sequences/Sequences.actions';
import { createGenerateClassName, makeStyles, Classes } from '@material-ui/styles';

import unfilledPin from '../../../static/images/redpin.png';
import filledPin from '../../../static/images/blackpin.png';

const libraries = ["places"];
const mapContainerStyle = {
  height: "775px",
  width: "798px",
};

const styles = makeStyles((theme) => ({ 
  print: {
      height: "775px",
      width: "41.5vw",
      [theme.breakpoints.down('md')]: {
          height: "775px",
          width: "798px",
        },
  },
}))

const normalStyle = {
  height: "775px",
  width: "41.5vw",
};

//reduce the width to make the print width of the map less, if complaint, would suggest 90vw
const printStyle = {
  height: "775px",
  width: "100vw",
};

const center = {
    lat: 1,
    lng: 27.5,
};

const Map = ({checked}) => {
  const printClasses = styles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

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
        mapContainerStyle={matches ? normalStyle : printStyle}
        zoom={3.66}
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
          fontSize
          position={{ lat: selected.lat, lng: selected.lon }} 
          onCloseClick = {() => {
            setSelected(null);
          }}
          > 
            <div>
            <font size="3"><b>Location ID:</b> {selected.locationID}</font><br></br>
            <font size="3"><b>Locality Type:</b> {selected.locationType}</font><br></br>
            <font size="3"><b>Locality:</b> {selected.locationName}</font><br></br>
            <font size="3"><b>Country:</b> {selected.locality}</font>
            <br></br>
            <br></br>
            <font size="3"><b>Haplotype:</b> {selected.haplotypeId}</font><br></br>
            <font size="3"><b>Matches:</b> {selected.match}</font><br></br>
            <font size="3"><b>Mismatches:</b> {selected.mismatch}</font><br></br>
            <font size="3"><b>Author:</b> {selected.author}</font>
            </div>
          </InfoWindow>) : null}

          
      </GoogleMap>
    </div>
  );
}

export default Map;

