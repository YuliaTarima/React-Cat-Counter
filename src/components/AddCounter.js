import React, { useState } from 'react';

function AddCounter(props) {

    const [name, setName] = useState('The Matroskin Cat');
    const [count, setCount] = useState(9);
    console.log('AddCounter: name:'+name + ' count '+count);


    const onSubmit = () => {
        console.log('onSubmit: name:' + name + ' count: '+count);
        //props.onSubmit(name, Number(count));
        props.addCat(name, Number(count));
        setName(name);
        setCount(count);
    };

    return (
        <div>
<label>Cat Name</label>
            <input type="text" name='name' value={name}
                   onChange={e => setName(e.target.value)} />
            <label>Cat Lives</label>
            <input type="number" name='count' value={count}
                   onChange={e => setCount(e.target.value)} />


            <button onClick={() => onSubmit(name, count)}>Create</button>

        </div>
    );
}

export default AddCounter;
