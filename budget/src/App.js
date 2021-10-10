
import './App.css';
import Transaction from './components/Transaction';
import TRANSACTION_DATA from './mock-data';

function App() {
  return (
    <div className="App">
      {TRANSACTION_DATA.map(trans => <Transaction {...trans}/>)}
    </div>
  );
}

export default App;
