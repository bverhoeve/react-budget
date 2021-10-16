
import './App.css';
import Transaction from './components/Transaction';
import TRANSACTION_DATA from './mock-data';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      {TRANSACTION_DATA.map((trans, index) => <Transaction {...trans } key={index}/>)}
      <StarRating />
    </div>
  );
}

export default App;
