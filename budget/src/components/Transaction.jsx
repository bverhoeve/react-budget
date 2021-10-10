export default function Transaction({user, amount, place}) {
    return <div className="bg-red-200 text-left">{user} gaf ${amount} uit bij {place}.</div>;
}