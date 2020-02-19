import React, {useState} from 'react';
import ResetCount from './ResetCount';

function Counter(props) {

    const {name} = props.counter;

    const [prevCount, setCount] = useState(props.counter.initialValue);

    const incrementCountHandler = () => {
        //prevCount++;
        setCount(prevCount + 1);
        console.log('Counter: prevCount in + Handler ' + prevCount);
        props.countChanges(prevCount, +1);
    }
    const decrementCountHandler = () => {
        //prevCount--;
        setCount(prevCount - 1);
        console.log('Counter: prevCount in - Handler ' + prevCount);
        props.countChanges(prevCount, -1);
    }

    return (
        <div className="container p-3 my-3 border">
            <div className="row content">
                <p>
                    <button onClick={decrementCountHandler}>-</button>
                    &nbsp;<strong>Lives of {name} : {prevCount}</strong>&nbsp;
                    <button onClick={incrementCountHandler}>+</button>
                    <ResetCount resetCount={props.resetCount}
                                resetHandler={props.resetHandler}
                                counter={props.counter}/>
                </p>
            </div>
        </div>
    );
}

export default Counter;
