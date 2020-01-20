import React from 'react';

const Checkbox = ( {day, setDaysWeek, daysWeek}) => {

    function handleCheckingBox(e) {
        if (e.target.checked) {
            setDaysWeek([...daysWeek, e.target.value]);
        } else {
            setDaysWeek(daysWeek.filter( d => d !== e.target.value));
        }
        
    }

    return (
        <>
            <input
                type="checkbox"
                name={day} 
                id={day} 
                value={day}
                onChange={handleCheckingBox}
                checked={daysWeek.filter(d => d === day).length > 0 }
            /><label htmlFor={day}>{day.slice(0, 3)}</label>
        </>
    )
} 

export default Checkbox;
