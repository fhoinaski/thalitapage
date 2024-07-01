import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrigir o problema do ícone padrão do marcador
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const AddressMap = () => {
  // Coordenadas aproximadas para o endereço (você precisará ajustar isso)
  const position = [-27.5869, -48.5115]; // Latitude e Longitude para Florianópolis

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
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