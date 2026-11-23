import { useState, useEffect } from 'react';
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
  const [places, setPlaces] = useState<Place[] > ([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);


  useEffect(() => {
    const getAllPlaces = async () => {
      const data = await fetch(import.meta.env.VITE_SERVER_URL + 'api/places');
      const obj = await data.json();
      setPlaces(obj);
    };
    getAllPlaces();
  }, []);

  function highlightPlace() {
    const places = document.querySelectorAll('.placesList li');
    let alreadyHighlighted: string;


    if (hoveredId !== null) {
      places.forEach(place => {
        if ((place.id === hoveredId.toString() && place.id !== alreadyHighlighted)) {
          place.classList.add('highlighted');
          alreadyHighlighted = place.id;
        } else {
          place.classList.remove('highlighted');
          alreadyHighlighted = '';
        }
      });
    }
  }

  return (
    <>
      <div className='mapAndList'>
        <div>
          <ul className='placesList'>
            {places.map(p => 
              <li
                key={p.ID}
                className={hoveredId === p.ID ? 'highlighted' : ''}
                onClick={() => setHoveredId(p.ID)}>
                {p.Name} ({p.Latitude.toFixed(4)}, {p.Longitude.toFixed(4)});
              </li>
            )}
          </ul>
        </div>
        <div>
          <MapContainer className='mapContainer' center={[62.5992, 29.7701]} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map(p => 
              <Marker key={p.ID} position={[p.Latitude, p.Longitude]} eventHandlers={{click: () => {setHoveredId(p.ID); highlightPlace();}}}>
                <Popup>
                  {p.Name}
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default MapAndList;