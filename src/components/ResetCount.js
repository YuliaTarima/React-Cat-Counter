import React, {useState} from 'react';

function ResetCount(props) {

    const {name, setTotalCount, resetCount, resetHandler} = props.counter;

    const [totalCount, setCount] = useState(resetCount);



    return (
        <span>
            &nbsp;
            <button >
               Reset {name}
            </button>
        </span>

    );
}

export default ResetCount;
