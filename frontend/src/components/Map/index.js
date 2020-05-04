import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../../images/trash.svg'),
  iconUrl: require('../../images/trash.svg'),
});

const trashEmpty = new L.Icon({
  iconUrl: require('../../images/trash.svg'),
  iconRetinaUrl: require('../../images/trash.svg'),
  iconSize: new L.Point(24, 41),
});

const trashWarning = new L.Icon({
  iconUrl: require('../../images/warning.svg'),
  iconRetinaUrl: require('../../images/warning.svg'),
  iconSize: new L.Point(24, 41),
});

const trashFull = new L.Icon({
  iconUrl: require('../../images/full.svg'),
  iconRetinaUrl: require('../../images/full.svg'),
  iconSize: new L.Point(24, 41),
});

function MapIndex({ bins }) {
  return (
    <Map
      className="map"
      center={[13.0372762, 80.2343613]}
      zoom={17}
      maxZoom={19}
      minZoom={16}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {bins.map((bin) => (
        <Marker
          key={bin.name}
          position={[bin.lat, bin.lng]}
          icon={
            bin.level <= 40
              ? trashEmpty
              : bin.level >= 80
              ? trashFull
              : trashWarning
          }
        >
          <Popup className="pop-up">
            <h1>{bin.name}</h1>
            <h3>Level: {bin.level}%</h3>
            <h4>Lat: {bin.lat}</h4>
            <h4>Lng: {bin.lng}</h4>
          </Popup>
        </Marker>
      ))}
    </Map>
  );
}

export default MapIndex;
