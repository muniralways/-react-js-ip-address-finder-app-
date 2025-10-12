import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ lat, lon }) => {
  if (!lat || !lon) return <p>Loading map...</p>;

  return (
    <div className="map" style={{ height: "400px", width: "100%" }}>
      <MapContainer center={[lat, lon]} zoom={12} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}>
          <Popup>📍 You are here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
