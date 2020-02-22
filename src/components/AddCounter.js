import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function AddCounter(props) {

    const [name, setName] = useState('The Matroskin Cat');
    const [count, setCount] = useState(9);
    console.log('AddCounter state');
    console.log(name);
    console.log(count);

    const onSubmit = () => {
            console.log('onSubmit: name: ' + name + ', count: ' + count);
            if (count > 9) {
                (window.confirm('Maximum cat lives is 9'))
            } else {
                props.addCat(name, Number(count));
                setName(name);
                setCount(Number(count));
            }
        console.log('onSubmit: name: ' + name + ', count: ' + count);
        }
    ;

    return (
        <div>
            <label>Cat Name</label>
            <input type="text" name='name' value={name}
                   onChange={e => setName(e.target.value)}/>
            <label>Cat Lives</label>
            <input type="number" name='count' value={count}
                   onChange={e => setCount(e.target.value)}/>


            <button onClick={() => onSubmit(name, count)}><FontAwesomeIcon icon="baby-carriage"/>{' '} Create</button>

        </div>
    );
}

export default AddCounter;
