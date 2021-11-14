
import './App.css';
import Transaction from './components/Transaction';
import {TRANSACTION_DATA, PLACE_DATA} from './mock-data';
import {useState, useMemo, useCallback} from 'react';
import Places from "./components/Places";
import AddTransactionForm from './components/AddTransactionForm';

function App() {
  const [places, setPlaces] = useState(PLACE_DATA);
  const [transactions, setTransactions] = useState(TRANSACTION_DATA);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const ratePlace = useCallback((id, rating) => {
    const newPlaces = places.map((p) => (p.id === id ? {...p, rating } : p))
    setPlaces(newPlaces);
  }, [places]);

  const createTransaction = (user, place, amount, date) => {
    const newTransactions = [
      {
        user, place, amount, date: new Date(date)
      },
      ...transactions
    ];
    setTransactions(newTransactions);
    console.log("transactions", JSON.stringify(transactions));
    console.log("newtransactions", JSON.stringify(newTransactions));
  }

  const filteredTransactions = useMemo(() => transactions.filter((t) => {
    console.log("filtering ")
    return t.place.toLowerCase().includes(search.toLowerCase());
  }), [transactions, search]);

  console.log("Render app");

  return (
    <div className="App">
      <AddTransactionForm places={places} onSaveTransaction={createTransaction} />
       <div className="m-5 flex">
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="search" />
          <button type="button" onClick={() => {setSearch(text)}}>Search</button>
       </div>
       {filteredTransactions.map((trans, index) => {
          return <Transaction {...trans} key={index} />
        })}
        <Places places={places} onRate={ratePlace} />
    </div>
  );
}

export default App;
