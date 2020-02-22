import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Counter(props) {

    const {id, name, livesCount} = props.counter;

    // const countHearts = () => {
    //     let hearts = ' ';
    //     for (let i = 1; i <= livesCount; i++) {
    //         document.write(<FontAwesomeIcon icon="heart"/>);
    //     }
    // }

    return (
        <div className="container p-3 my-3 border">
            <div className="cat-header">

                    <span className="cat-avatar">
                   <FontAwesomeIcon icon="cat"/>
                    </span>
                    <p className="cat-name">{name}, {' '}lives: {livesCount}</p>

            </div>
            <div className="row content">
                <p><strong>Control Lives</strong></p>
                <p>
                    <button onClick={() => props.decrementLives(id)}>-
                    </button>

                    <strong>{livesCount}</strong>&nbsp;
                    <button onClick={() => props.incrementLives(id)}>+
                    </button>

                    <button className="revive-button"
                            onClick={() => props.reviveCat(name, id)}>
                        <FontAwesomeIcon icon="medkit"/>{' '} Revive {name}
                    </button>
                </p>
                <p>
                    <button className="reset-button"
                            onClick={() => props.resetCat(name, id)}>
                        <FontAwesomeIcon
                            icon="skull-crossbones"/>{' '} Reset {name}
                    </button>

                    <button className="remove-button"
                            onClick={() => props.removeCat(name, id)}>
                        <FontAwesomeIcon icon="times-circle"/>{' '} Remove {name}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Counter;
