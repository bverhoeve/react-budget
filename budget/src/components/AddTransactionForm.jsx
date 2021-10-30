import { useState } from "react"


export default function AddTransactionForm( { places, onSaveTransaction = (f) => {} } ) {

    const [user, setUser] = useState("");
    const [date, setDate] = useState(new Date());
    const [place, setPlace] = useState("home");
    const [amount, setAmount] = useState(0); 

    const toDateInputString = (date) => {

        // (toISOString returns something like 2020-12-05T14:15:74Z,
        // date HTML5 input elements expect 2020-12-05

        if (!date) return null;
        if (typeof date !== Object ) {
            date = new Date(date);
        }
        let asString = date.toISOString();
        return asString.substring(0, asString.indexOf("T"));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveTransaction(user, place, amount, date);
        setUser("");
        setDate(new Date());
        setPlace("home");
        setAmount(0);
    }

    return( 
        <form className="m-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="user">who</label>
                    <input 
                    value={user} 
                    type="text"
                    placholder="user"
                    name="user"
                    required
                    onChange={(e) => setUser(e.target.value)}
                    />
                </div>
            </div>
            
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="date">when</label>
                <input 
                onChange={(e) => setDate(e.target.value)} 
                value={toDateInputString(date)} 
                type="date" 
                placeholder="date" 
                name="date" 
                id="date" 
                />
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="place"> where</label>
                <select 
                onChange={(e) => setPlace(e.target.value)}
                name="place" 
                id="place" 
                required 
                value={place}
                > 
                    {places.map((p, index) => (
                        <option key={index} value={p.name}>
                            {p.name}
                        </option>
                    ))}
                </select>    
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="amount">amount</label>
                <input onChange={(e) => setAmount(e.target.value)} type="number" placeholder="amount" name="amount" id="amount" required value={amount}/>
            </div>

            <div className="col-span-6 sm:col-span-3">
                <button>
                        submit
                </button>
            </div>
        </form>
    )
}