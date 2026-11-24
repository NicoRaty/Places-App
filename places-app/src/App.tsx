import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import MapAndList from './MapAndList';
import Header from './header';
import LoginModal from './login';
import RegisterModal from './register';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <Header appName="PlacesApp" appHref="#home" onLoginClick={() => setShowLogin(true)} onSignupClick={() => setShowRegister(true)} />
      <LoginModal show={showLogin} onHide={() => setShowLogin(false)} />
      <RegisterModal show={showRegister} onHide={() => setShowRegister(false)} />
      <MapAndList />
    </>
  );
};

export default App;