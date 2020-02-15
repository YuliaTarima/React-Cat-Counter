import React from 'react';

let name ='';

function Content(props) {
    const name = 'Yulia';

  const clickButtonHandler = (value) => {
    props.bc(name);
    console.log('Clicked! ' + name + value);
  }

  const inputHandler = (e) => {
    console.log(e.target.value)
  }

  return (
    <div className="container p-3 my-3 border">
      <div className="row content">
        <article>
          <section>
            <h1>{name}'s React App</h1>
            <input type="text" onChange={inputHandler}></input>
            <button onClick={() => clickButtonHandler(1)}>Add one</button>
            <button onClick={() => clickButtonHandler(2)}>Add two</button>
          </section>
          
          <section>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque libero eu ante scelerisque commodo. Sed tempus erat quis diam rhoncus laoreet. Duis velit nibh, aliquet ac consectetur vel, ornare at quam. Aliquam fermentum lacus quis augue sagittis euismod. Aliquam pellentesque consectetur eros, at commodo nibh rutrum at. Nunc sollicitudin magna nec felis elementum, at fermentum eros auctor. Proin sapien leo, laoreet eget mauris eget, eleifend consectetur sem. Nam pulvinar libero tortor, id sagittis tortor porttitor a.</p>
          </section>
      
        </article>
      </div>
    </div>
  );
}

export default Content;
