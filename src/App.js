import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Weather from './components/Weather';

function App() {
  const APIKEY = process.env.REACT_APP_WEATHER_API
  const [location, setLocation] = useState("Delhi, India");
  //eslint-disable-next-line
  const [unit, setUnit] = useState("celsius");
  return (
    <>
      <BrowserRouter>
        <Navbar setLocation={setLocation} location={location} unit={unit} setUnit={setUnit}/>
        <Routes>
          <Route exact path="/" element={<Weather location={location} unit={unit} apiKey={APIKEY}/>} />
          <Route exact path="/celsius" element={<Weather location={location} unit="celsius"  apiKey={APIKEY}/>} />
          <Route exact path={`/celsius/${location}`} element={<Weather location={location} unit="celsius"  apiKey={APIKEY}/>} />
          <Route exact path="/fahrenhiet" element={<Weather location={location} unit="fahrenhiet"  apiKey={APIKEY}/>} />
          <Route exact path={`/fahrenhiet/${location}`} element={<Weather location={location} unit="fahrenhiet"  apiKey={APIKEY}/>} />
          <Route exact path='about' element={<About/>}/>
          <Route exact path='*' element={<NoMatch/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
