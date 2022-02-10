import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";


const libraries = ["places"];
const mapContainerStyle = {
  height: "53.5vh",
  width: "49.93vw",
};
const center = {
    lat: 1,
    lng: 17
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);


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
        
      </GoogleMap>
    </div>
  );
}



