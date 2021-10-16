import { useState } from 'react';
import { IoStarSharp } from 'react-icons/io5';

const Star = ({selected=false}, onSelect = (f) => f) => {
    return (
        <IoStarSharp color={selected ? "yellow" : "grey"} className="inline-block" onClick={onSelect}/>
    )
}

export default function StarRating({totalStars=5}) {
    const [selectedStars, setSelectedStars] = useState(2);


    return (
        <>
        {[...new Array(totalStars)].map((star, i) => <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i+1)}/>)}
        <p className="text-xs text-gray-700">
            {selectedStars} out of {totalStars} stars
        </p>
        </>
    );
}