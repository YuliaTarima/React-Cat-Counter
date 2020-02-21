import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Counter from "./components/Counter";
import AddCounter from "./components/AddCounter";
import NavItem from "./components/NavItem";
import ResetCount from "./components/ResetCount";

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

const InitialCountersState = [
    {id: 456, name: 'The Cheshire Cat', livesCount: 9},
    {id: 123, name: 'Cat in The Hat', livesCount: 6},
    {id: 234, name: 'Witches Black Cat', livesCount: 6},
    {id: 345, name: 'Happy Fat Cat', livesCount: 6}
];

//const resetCount = 0;
//const resetAllCounters = false;

function App() {

    // state
    const [counters, setCounters] = useState(InitialCountersState);
    const initialTotalLives = counters
        .map(el => el.livesCount)
        .reduce((previous, current) => previous + current);
    const [totalLives, setTotalLives] = useState(initialTotalLives);

    const calculateTotalCatLives = () => {
        setTotalLives(counters
            .map(el => el.livesCount)
            .reduce((previous, current) => previous + current)
        );
    };

    const incrementLives = (id) => {
        const index = counters.findIndex(el => el.id === id);
        const newCounters = [...counters];
        newCounters[index].livesCount = newCounters[index].livesCount + 1;
        setCounters(newCounters);
        setTotalLives(calculateTotalCatLives);
    }
    const decrementLives = (id) => {
        const newCounters = counters.map(el => {
            if (el.id === id) return {...el, livesCount: el.livesCount - 1};
            return el;
        });
        setCounters(newCounters);
        setTotalLives(calculateTotalCatLives);
        //setTotalLives(totalLives - 1);
    }

    const resetLives = (name, id) => {
        const msg = 'Are you sure you want to reset ' + name + ' ?';
        console.log('COUNTERS: ' + counters.map(el => el.livesCount.valueOf()));
        if (window.confirm(msg)) {
            const index = counters.findIndex(el => el.id === id);
            const newCounters = [...counters];
            newCounters[index].livesCount = 0;
            setCounters(newCounters);
            setTotalLives(calculateTotalCatLives);
        }
    }

    const resetAllCats = () => {
        const msg = 'Are you sure you want to reset all the Cats?';
        if (window.confirm(msg)) {
            setTotalLives(0);

            // console.log('COUNTERS: ' + counters.map(el =>
            // el.livesCount.valueOf()));
            const newCounters = counters;
            for (let counter of newCounters) {
                counter.livesCount = 0
            }
            // const newCounters = counters.map(el => ({ ...el, livesCount: 0 }));
            setCounters(newCounters);
        }
    }

    const reviveCat = (name, id) => {
        const msg = 'Are you sure you want to give ' + name + ' 9 lives?';
        //console.log('COUNTERS: ' + counters.map(el =>
        // el.livesCount.valueOf()));
        if (window.confirm(msg)) {
            const index = counters.findIndex(el => el.id === id);
            const newCounters = [...counters];
            newCounters[index].livesCount = 9;
            setCounters(newCounters);
            setTotalLives(calculateTotalCatLives);
        }
    }

    const reviveAllCats = () => {
        const msg = 'Are you sure you want to give every cat 9 lives?';
        if (window.confirm(msg)) {
            const newCounters = counters;
            for (let counter of newCounters) {
                counter.livesCount = 9;
            }
            setCounters(newCounters);
            setTotalLives(calculateTotalCatLives);
        }
    }

    const removeCat = (name, id) => {
        const msg = 'Are you sure you want to remove ' + name + ' ?';
        //console.log('COUNTERS: ' + counters.map(el =>
        // el.livesCount.valueOf()));
        if (window.confirm(msg)) {
            if (counters.length === 1) {
                window.confirm('Can not remove the sole survivor');
                //setTotalLives(counters.livesCount)
                return counters;
            }
            const newCounters = counters.filter(el => el.id !== id);
            setCounters(newCounters);
            //setCounters(counters.filter(el => el.id !== id));
            // console.log(counters.filter(el => el.id !== id));
            // console.log(counters);
            // console.log(newCounters);
            //setTotalLives(calculateTotalCatLives);
            setTotalLives(newCounters
                .map(el => el.livesCount)
                .reduce((previous, current) => previous + current)
            );
        }
    };

    const addCat = (name, count) => {
        const newCounters = [...counters, {
            id: Math.random(),
            name,
            livesCount: count
        }];
        setCounters(newCounters);
        //setTotalLives(calculateTotalCatLives);
        console.log('counters');
        console.log(counters);
        console.log('newCounters');
        console.log(newCounters);
        setTotalLives(newCounters
            .map(el => el.livesCount)
            .reduce((previous, current) => previous + current)
        );
    };

    return (
        <div className="App">
            <div id="main-container" className="container p-3 my-3 border">
                <Header navItems={navItems}/>

                <h1>Count Cat Lives</h1>

                <strong>Total Lives</strong>: {totalLives}

                &nbsp;
                <button className="reset-button" onClick={() => resetAllCats()}>
                    Reset All the Cats
                </button>

                &nbsp;
                <button className="revive-button"
                        onClick={() => reviveAllCats()}>
                    Revive All the Cats
                </button>

                {/*<AddCounter onSubmit={addCat()} />*/}

                <div>{counters.map(el => <Counter key={el.id}
                                                  counter={el}
                                                  id={el.id}
                                                  name={el.name}
                                                  livesCount={el.livesCount}
                                                  incrementLives={incrementLives}
                                                  decrementLives={decrementLives}
                                                  resetLives={resetLives}
                                                  reviveCat={reviveCat}
                                                  removeCat={removeCat}
                />)}
                </div>
                <AddCounter onSubmit={() => addCat()} addCat={addCat}/>

                <Footer footerNavItems={navItems}
                        socialShareLinks={socialShareLinks}/>
            </div>
        </div>
    );
}

export default App;
