import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('./trash.svg'),
  iconUrl: require('./trash.svg'),
});

import useBinLocations from '../../hooks/useBinLocations';

function MapIndex() {
  const bins = useBinLocations();

  return (
    <Map
      className="map"
      center={[13.0372762, 80.2343613]}
      zoom={17}
      maxZoom={21}
      minZoom={15}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {bins.map((bin) => (
        <Marker key={bin.name} position={[bin.lat, bin.lng]}>
          <Popup>{bin.name}</Popup>
        </Marker>
      ))}
    </Map>
  );
}

export default MapIndex;
