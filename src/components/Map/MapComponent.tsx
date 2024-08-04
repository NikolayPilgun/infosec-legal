import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import iconSearch from "../../assets/map/icon.svg";
import styles from "./MapComponent.module.css";

interface City {
	name: string;
	count?: number;
	coordinates: [number, number];
}

interface MapProps {
	selectedCity: City;
	zoom: number;
}

const customIcon = new L.Icon({
	iconUrl: iconSearch,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

const MapComponent: React.FC<MapProps> = ({ selectedCity, zoom }) => {
	return (
		<div className={styles.container}>
			<MapContainer
				center={selectedCity.coordinates}
				zoom={zoom}
				style={{ width: "100%", height: "100%" }}
				key={selectedCity.name}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={selectedCity.coordinates} icon={customIcon}>
					<Popup>{selectedCity.name}</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapComponent;
