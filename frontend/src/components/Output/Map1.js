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
import lionPin from '../../../static/images/lion5.png';

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
  width: "100%", //fix for firefox printing - map in full form
};

//reduce the width to make the print width of the map less, if complaint, would suggest 90vw
const printStyle = {
  height: "775px",
  width: "100vw",
};

const center = {
    lat: 5,
    lng: 28.5,
};


var zero = []
var nonZero = []
var zeroResult = []
var nonZeroResult = []

const Map = ({checked}) => {
  const printClasses = styles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const alignList = useSelector(state => state.align.align.array)
  const queryInfo = useSelector(state => state.align)
  const countryList = [47, 60, 69, 71, 119, 125, 137, 138, 165, 166, 167, 182, 183, 184, 185, 187, 190, 191, 192, 238, 275]
  //console.log(checked)
  
  // this is to get an array of both the 0 matches and more than 0 mismatches in order to build a comparison array later
  //useEffect is used when you need to run something based on a change of a variable, in this case it's queryInfo.isLoading
  useEffect(() => {
    if(queryInfo.isLoading == false){
      var mismatch = alignList.filter(row => row.mismatch==0);
      var zeroList = mismatch.map(row => row.id);
      //array of 0 mismatches
      zero = alignList.filter(item => zeroList.includes(item.id))
        
      var nonMismatch = alignList.filter(row => row.mismatch!=0);
      var nonZeroList = nonMismatch.map(row => row.id);
      //array of more than 0 mismatches
      nonZero = alignList.filter(item => nonZeroList.includes(item.id))
  }
  }, [queryInfo.isLoading])

  //comparison arrays for 0 mismatches every time checked state changes
  var zeroResult = zero.filter(function(o1){
    // filter out (!) items in result2
    return checked.some(function(o2){
        return o1.id === o2.id;          // assumes unique id
    });
  })
  
  //comparison array for more than 0 mismatches that changes every time checked state changes
  var nonZeroResult = nonZero.filter(function(o1){
    // filter out (!) items in result2
    return checked.some(function(o2){
        return o1.id === o2.id;          // assumes unique id
    });
  })
  //console.log("Align results", zeroResult, nonZeroResult)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  
  //whether the pinpoint is selected or not
  const [ selected, setSelected ] = React.useState(null);

  //comparing which points are not checked so that the placer marker appears
  let result = alignList.filter(item => checked.indexOf(item) == -1);
  //console.log("result", result)

  //array for no country info
  let countryResult = result.filter(item => countryList.includes(item.locationID));
  //console.log(countryResult)

  //array for both country and locality info
  let localityResult = result.filter(item => !countryList.includes(item.locationID));
  //console.log(localityResult)

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

 
  return (
    <div class="map-container">
      <GoogleMap
        class="map-component"
        id="map"
        mapContainerStyle={matches ? normalStyle : printStyle}
        zoom={3.3}
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

        {zeroResult.map(row => 
          <Marker
          key={row.locationID}
          position={{lat: row.lat, lng: row.lon}}
          icon={{
            url: lionPin,
            scaledSize: new window.google.maps.Size(32,44),}}
          onClick={() => {
            setSelected(row);
          }}
          />
          )}

        {nonZeroResult.map(row => 
          <Marker
          key={row.locationID}
          position={{lat: row.lat, lng: row.lon}}
          onClick={() => {
            setSelected(row);
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
            <font size="3"><b>Locality:</b> {selected.location} {selected.locationName} </font><br></br>
            <font size="3"><b>Country:</b> {selected.locality}</font>
            <br></br>
            <br></br>
            <font size="3"><b>Haplotype:</b> {selected.haplotypeId}</font><br></br>
            <font size="3"><b>Matches:</b> {selected.match}</font><br></br>
            <font size="3"><b>Mismatches:</b> {selected.mismatch}</font><br></br>
            <font size="3"><b>Author:</b> {selected.author}</font><br></br>
            <font size="3"><b>GenBank:</b> {selected.genBankAccession}</font>
            </div>
          </InfoWindow>) : null}

          
      </GoogleMap>
    </div>
  );
}

export default Map;

