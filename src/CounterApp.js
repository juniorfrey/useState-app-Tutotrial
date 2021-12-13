import React, { useState } from 'react'

const CounterApp = () => {

    const [counter, setCounter] = useState(0);

    const incrementarCounter = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <button onClick={() => incrementarCounter()}>Incrementar</button>
            <h1>Clicks: {counter}</h1>
        </div>
    )
}

export default CounterApp
