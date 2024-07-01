import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const colors = {
  primary: "#f8dbc5",
  secondary: "#CE9D81",
  terciary: "#333333",
  "text-white": "#fff8f2",
  text: "#C09C81",
  background: "#FFF8F2",
  accent: "#CD853F",
  "icon-facebook": "#3b5998",
  "icon-instagram": "#e4405f",
  "icon-whatsapp": "#25d366",
};

const buttonColors = {
  color: "#CE9D81",
  hover: "#c09c81",
  text: "#fff8f2",
};

const customIcon = new L.Icon({
  iconUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23007bff' width='32' height='32'%3E%3Cpath d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/%3E%3C/svg%3E",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const AddressMap = () => {
  const position = [-27.574766, -48.510267]; // Latitude e Longitude para Florianópolis

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
      <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            Infinity Office, Sala 606<br />
            Rua Patrício Farias, número 101<br />
            Itacorubi 88034-132
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default AddressMap;