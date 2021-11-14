import React from "react";

export default React.memo(function Transaction({user, amount, place}) {
    console.log("Render transaction");
    return <div className="bg-red-200 text-left">{user} gaf ${amount} uit bij {place}.</div>;
})