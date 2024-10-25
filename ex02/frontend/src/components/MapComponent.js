import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import styles from "./MapComponent.module.css"; // Import the styles

// Set up default icon for markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = ({ coordinates }) => {
  const { lat, lng } = coordinates;

  const ChangeView = ({ coords }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(coords, map.getZoom());
    }, [coords, map]);
    return null;
  };

  return (
    <MapContainer center={[lat, lng]} zoom={13} className={styles.mapContainer}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]}>
        <Popup className={styles.markerPopup}>
          {" "}
          {/* Use the popup class for styling */}
          Location: {lat}, {lng}
        </Popup>
      </Marker>
      <ChangeView coords={[lat, lng]} />
    </MapContainer>
  );
};

export default MapComponent;
