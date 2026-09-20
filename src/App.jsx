import "./App.css";

import Cities from "./components/Cities/Cities.jsx";
import Form from "./components/Form/Form.jsx";
import Weather from "./components/Weather/Weather.jsx";
import Forecast from "./components/Forecast/Forecast.jsx";
import Footer from "./components/Footer/Footer.jsx";


export default function App() {
  return (
    <div className="App">
      <div className="weather container border border-secondary border-2 rounded p-4">
        <Cities />
        <Form />
        <Weather />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}