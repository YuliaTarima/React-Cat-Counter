import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Counter from "./components/Counter";
import NavItem from "./components/NavItem";

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

const counters = [
    {name: 'Cat1', initialValue: 6},
    {name: 'Cat2', initialValue: 9},
];

const resetCount = 0;

function App() {
    //const [counters, setCounters] = useState(counters);
    const initialTotalCount = counters
        .map(el => el.initialValue)
        .reduce((previous, current) => previous + current);

    const [totalCount, setTotalCount] = useState(initialTotalCount);

    const resetHandler = (name) => {
        const msg =  'Are you sure you want to reset ' + name + ' ?';
        if (window.confirm(msg)) {
            setTotalCount(resetCount);
        }
    }

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

                <h1>Count Cat Lives</h1>

                <strong>Total Lives</strong>: {totalCount}

                &nbsp;
                <button onClick={() => resetHandler('All the Cats?')}>
                    Reset All Cats
                </button>

                <div>{counters.map(el => <Counter key={el.name} counter={el}
                                                  countChanges={countChanges}
                                                  resetCount={resetCount}
                                                  resetHandler={resetHandler}/>)}
                </div>

                <Footer footerNavItems={navItems}
                        socialShareLinks={socialShareLinks}/>
            </div>
        </div>
    );
}

export default App;
