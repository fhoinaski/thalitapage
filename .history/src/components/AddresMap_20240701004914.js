import {
  motion,
  AnimatePresence,
  useAnimate,
  stagger,
  useInView,
} from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin } from "lucide-react";


const colors = {
  primary: "#f8dbc5",
  secondary: "#CE9D81",
  terciary: "#333333",
  "text-white": "#fff8f2",
  text: "#C09C81",
  background: "#FFF8F2",
  accent: "#CD853F",
 
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
    <motion.section
    id="sobre"
    className="py-20"
    style={{ backgroundColor: colors.background }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-4">
    <div className="mb-6 md:mb-0 flex ">
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: colors.secondary }}
            >
              Localização
            </h3>
            <p className="flex items-center jus" style={{ color: colors.text }}>
              <MapPin className="mr-2" size={18} />
              Infinity Office, Sala 606, Rua Patrício Farias, número 101,
              Florianópolis/ Itacorubi 88034-132
            </p>
          </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
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
    </motion.div>
    </div>
  </motion.section>
  );
};

export default AddressMap;