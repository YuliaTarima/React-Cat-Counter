import React, {useState} from 'react';

function Counter(props) {

    const {id, name, livesCount} = props.counter;

    return (
        <div className="container p-3 my-3 border">
            <div className="row content">
                <p><strong>{name}</strong>, ID : {id} , lives: {livesCount}</p>
            </div>
            <div className="row content">
                <p>
                    &nbsp;
                    <strong>Control Lives</strong>&nbsp;
                    <button onClick={() => props.decrementLives(id)}>-
                    </button>
                    &nbsp;
                    <strong>{livesCount}</strong>&nbsp;
                    <button onClick={() => props.incrementLives(id)}>+
                    </button>
                    &nbsp;
                    <button className="reset-button" onClick={() => props.resetLives(name, id)}>
                        Reset {name}
                    </button>
                    &nbsp;
                    <button className="revive-button" onClick={() => props.reviveCat(name, id)}>
                        Revive {name}
                    </button>
                    &nbsp;
                    <button className="remove-button" onClick={() => props.removeCat(name, id)}>
                        Remove {name}
                    </button>
                    &nbsp;
                </p>
            </div>
        </div>
    );
}

export default Counter;
