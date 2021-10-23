
import './App.css';
import Transaction from './components/Transaction';
import {TRANSACTION_DATA, PLACE_DATA} from './mock-data';
import {useState} from 'react';
import Places from "./components/Places";

function App() {
  const  [places, setPlaces] = useState(PLACE_DATA);
  const ratePlace = (id, rating) => {
    const newPlaces = places.map((p) => (p.id === id ? {...p, rating } : p))
    setPlaces(newPlaces);
  };

  // Oefening: voeg een remove knop toe

  return (
    <div className="App">
      {TRANSACTION_DATA.map((trans, index) => <Transaction {...trans } key={index}/>)}
      <Places places={places} onRate={ratePlace}/>
    </div>
  );
}

export default App;
