import React, {useState} from 'react'

function Hookcounter() {
    
    const inititalCount = 0;
    const [count, setCount] = useState(inititalCount);

    const incrementFive = () => {
        for(let i =0; i < 5; i++){
            //setCount( count + 1);
            setCount( prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <h1>Counter Value is : {count} </h1>
            <button onClick={() => setCount(inititalCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Update Counter</button>
            <button onClick={() => setCount(count - 1)}>Decrease Count</button>
            <button onClick={incrementFive}>Add 5</button>
        </div>
    )
}

export default Hookcounter
