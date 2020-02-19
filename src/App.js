import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Counter from "./components/Counter";

const navItems = [
    {text: 'Home', link: 'home-page'},
    {text: 'Services', link: 'products-page'},
    {text: 'Prices', link: 'prices-page'},
    {
        text: 'Products', link: 'products-page',
        navItemDropdown: [
            {text: 'Product1', link: 'product1-page'},
            {text: 'Product2', link: 'product2-page'},
            {text: 'Product3', link: 'product3-page'}
        ]
    }
];

const socialShareLinks = [
    {text: 'Facebook', link: 'facebook-page'},
    {text: 'OK', link: 'ok-page'},
    {text: 'vk', link: 'vk-page'},
    {text: 'Twitter', link: 'twitter-page'}
];

const initialCount = 0;

function App() {

     const [totalCount, setTotalCount] = useState(initialCount);

    // function buttonClicked(name){
    //     console.log('CLICKED!!! ' + name);
    // }

    function countChanges(result, addSubtractValue) {
        console.log('App: countChanges: result: ' + result + ', addSubtractValue: ' + addSubtractValue);
        console.log('App state: totalCount: ' + totalCount);
        console.log('totalCount: ' + totalCount + ' vs result: ' + result);
        setTotalCount(totalCount + addSubtractValue);
    }

    return (
        <div className="App">
            <div id="main-container" className="container p-3 my-3 border">
                <Header navItems={navItems}/>
                <strong>Total count</strong>: {totalCount} &nbsp;
                <button onClick={() => setTotalCount(initialCount)}>Reset</button>
                {/*<Content bc={buttonClicked}/>*/}
                <Counter countChanges={countChanges}
                         initialCount={initialCount}
                />
                <hr/>
                <Counter countChanges={countChanges}
                         initialCount={initialCount}
                />
                <Footer footerNavItems={navItems}
                        socialShareLinks={socialShareLinks}/>
            </div>
        </div>
    );
}

export default App;
