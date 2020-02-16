import React, {useState} from 'react';

function Counter(props) {
    const count = props.initialCount;
    const [prevCount, setCount] = useState(count);
    //let prevCount = 3;
    // props.initialCount = prevCount;
    const countChangePlusHandler = () => {
        //prevCount++;
        setCount(prevCount + 1);
        console.log('Counter: prevCount in + Handler ' + prevCount);
        props.countChanges(prevCount, +1);
    }
    const countChangeMinusHandler = () => {
        //prevCount--;
        setCount(prevCount - 1);
        console.log('Counter: prevCount in - Handler ' + prevCount);
        props.countChanges(prevCount, -1);
    }

    return (
        <div className="container p-3 my-3 border">
            <div className="row content">
                <p>
                    <button onClick={() => setCount(count)}>Reset</button>
                    &nbsp;<strong>Counter Module</strong>&nbsp;
                    <button onClick={countChangeMinusHandler}>-</button>
                    &nbsp;Count: {prevCount}&nbsp;
                    <button onClick={countChangePlusHandler}>+</button>
                </p>
            </div>
        </div>
    );
}

export default Counter;
