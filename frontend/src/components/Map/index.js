import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('./trash.svg'),
  iconUrl: require('./trash.svg'),
  shadowUrl: require('./trash.svg'),
});

import styles from './map.module.scss';

function MapIndex() {
  return (
    <div className={styles.container}>
      <Map
        className="markercluster-map"
        center={[13.0372762, 80.2343613]}
        zoom={17}
        maxZoom={18}
        minZoom={15}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={[13.0372762, 80.2343613]} />
        <Marker position={[13.035674064914826, 80.22473214208932]} />
        <Marker position={[13.037874333584613, 80.23294954444535]} />
      </Map>
    </div>
  );
}

export default MapIndex;
