import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

type Place = {
  ID: number;
  Name: string;
  Latitude: number;
  Longitude: number;
  UserID: number;
};

const MapAndList = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [clickedId, setclickedId] = useState<number | null>(null);
  const markerRefs = useRef(new Map<number, L.Marker>());

  useEffect(() => {
    const getAllPlaces = async () => {
      const data = await fetch(import.meta.env.VITE_SERVER_URL + 'api/places');
      const obj = await data.json();
      setPlaces(obj);
    };
    getAllPlaces();
  }, []);

  useEffect(() => {
    if (clickedId === null) return;
    const marker = markerRefs.current.get(clickedId);
    if (marker) {
      marker.openPopup();
    }
  }, [clickedId]);

const setMarkerRef = (id: number) => (marker: L.Marker | null) => {
    if (marker) {
      markerRefs.current.set(id, marker);
    } else {
      markerRefs.current.delete(id);
    }
  };

  return (
    <>
      <div className='mapAndList'>
        <div>
          <ul className='list-group'>
            {places.map((p) => (
              <li
                key={p.ID}
                className={clickedId === p.ID ? 'list-group-item active' : 'list-group-item'}
                onClick={() => setclickedId(p.ID)}
              >
                {p.Name} ({p.Latitude.toFixed(4)}, {p.Longitude.toFixed(4)});
              </li>
            ))}
          </ul>
        </div>
        <div>
          <MapContainer className='mapContainer' center={[62.5992, 29.7701]} zoom={13} doubleClickZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map((p) => (
              <Marker
                key={p.ID}
                ref={setMarkerRef(p.ID)}
                position={[p.Latitude, p.Longitude]}
                eventHandlers={{
                  click: () => {
                    setclickedId(p.ID);
                  },
                }}
              >
                <Popup>{p.Name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default MapAndList;