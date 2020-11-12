import React, {useState} from 'react';
import {MapContainer, Marker, useMapEvents} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Popup} from "leaflet";

function YourLocation() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click(){
      map.locate()
    },
    locationfound(e){
      setPosition(e.latLng)
      map.flyTo(e.latLng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position ={position}>
      <Popup>You are here</Popup>

    </Marker>
  )
}

const MapView = () => {
  return <MapContainer centre = {{lat: '-21.52531', lng:'12.41032'}} zoom={13} scrollWheelZoom={false} >
    <YourLocation></YourLocation>

  </MapContainer>
}


export default MapView
