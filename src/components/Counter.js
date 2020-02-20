import React, {useState} from 'react';
import ResetCount from './ResetCount';

function Counter(props) {

    const {name, initialValue} = props.counter;
    const {resetAll, resetCount} = props;

    const [count, setCount] = useState(initialValue);

    console.log('resetAll '+resetAll);
    console.log(resetAll === true);

    const incrementCountHandler = () => {
        //count++;
        setCount(count + 1);
        console.log('Counter: count in + Handler ' + count);
        props.countChanges(count, +1);
    }
    const decrementCountHandler = () => {
        //count--;
        setCount(count - 1);
        console.log('Counter: count in - Handler ' + count);
        props.countChanges(count, -1);
        console.log('PROPS: ' + props.counter);
    }

    const resetHandler = (name) => {
        const msg = 'Are you sure you want to reset ' + name + ' ?';
        if (window.confirm(msg)) {
            props.countChanges(count, -(count));
            setCount(props.resetCount);
        }
    }

    return (
        <div className="container p-3 my-3 border">
            <div className="row content">
                <p>
                    <button onClick={decrementCountHandler}>-</button>
                    &nbsp;<strong>Lives of {name} : {count}</strong>&nbsp;
                    <button onClick={incrementCountHandler}>+</button>

                    &nbsp;
                    <button onClick={() => resetHandler(name)}>
                        Reset {name}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Counter;
