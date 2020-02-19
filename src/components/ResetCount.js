import React, {useState} from 'react';

function ResetCount(props) {

    const {name, setTotalCount, resetCount} = props.counter;

    const [totalCount, setCount] = useState(resetCount);



    const resetHandler = (name) => {

    }


    return (
        <span>
            &nbsp;
            <button onClick={() => props.resetHandler(name)}>
               Reset {name}
            </button>
        </span>

    );
}

export default ResetCount;
