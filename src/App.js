import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from "./components/Counter";
import AddCounter from "./components/AddCounter";
import ConfirmDeleteCat from "./components/ConfirmDeleteCat";

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
    faPaw,
    faCat,
    faHeart,
    faMedkit,
    faSkullCrossbones,
    faTimesCircle,
    faBabyCarriage
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fab, faPaw, faCat, faHeart, faMedkit, faSkullCrossbones, faTimesCircle, faBabyCarriage);

function App() {

    const InitialCountersState = [
        {id: 456, name: 'The Cheshire Cat', livesCount: 9},
        {id: 123, name: 'Cat in The Hat', livesCount: 6},
        {id: 234, name: 'Witches Black Cat', livesCount: 6},
        {id: 345, name: 'Happy Fat Cat', livesCount: 6}
    ];

    const [counters, setCounters] = useState(InitialCountersState);
    const [confirmDeleteCatCounter, setConfirmDeleteCatCounter] = useState({});

    const calculateTotalCatLives = () =>
        counters
            .map(el => el.livesCount)
            .reduce((previous, current) => previous + current);

    const incrementLives = (id) => {
        const index = counters.findIndex(el => el.id === id);
        const newCounters = [...counters];
        newCounters[index].livesCount = newCounters[index].livesCount + 1;
        setCounters(newCounters);
    }

    const decrementLives = (id) => {
        const newCounters = counters.map(el => {
            if (el.id === id) return {...el, livesCount: el.livesCount - 1};
            return el;
        });
        setCounters(newCounters);
    }

    const resetCat = (name, id) => {
        const msg = 'Are you sure you want to reset ' + name + ' ?';
        console.log('COUNTERS: ' + counters.map(el => el.livesCount.valueOf()));
        if (window.confirm(msg)) {
            const index = counters.findIndex(el => el.id === id);
            const newCounters = [...counters];
            newCounters[index].livesCount = 0;
            setCounters(newCounters);
        }
    }

    const resetAllCats = () => {
        const msg = 'Are you sure you want to reset all the Cats?';
        if (window.confirm(msg)) {
            const newCounters = counters.map(el => ({...el, livesCount: 0}));
            setCounters(newCounters);
        }
    }

    const reviveCat = (name, id) => {
        const msg = 'Are you sure you want to give ' + name + ' 9 lives?';
        if (window.confirm(msg)) {
            const index = counters.findIndex(el => el.id === id);
            const newCounters = [...counters];
            newCounters[index].livesCount = 9;
            setCounters(newCounters);
        }
    }

    const reviveAllCats = () => {
        const msg = 'Are you sure you want to give every cat 9 lives?';
        if (window.confirm(msg)) {
            const newCounters = counters.map(el => ({...el, livesCount: 9}));
            setCounters(newCounters);
        }
    }
    //**************
    const confirmRemoveCat = counter => {
        setConfirmDeleteCatCounter(counter);
    };

    const removeConfirmedCat = () => {
        const newCounters = counters.filter(el => el.id !== confirmDeleteCatCounter.id);
        setCounters(newCounters);
        setConfirmDeleteCatCounter({});
    };
    const cancelConfirmRemoveCat = () => {
        setConfirmDeleteCatCounter({})
    };
    //**************

    // const removeCat = (name, id) => {
    //     const msg = 'Are you sure you want to remove ' + name + ' ?';
    //     if (window.confirm(msg)) {
    //         if (counters.length === 1) {
    //             window.confirm('Can not remove the sole survivor');
    //             return counters;
    //         }
    //         const newCounters = counters.filter(el => el.id !== id);
    //         setCounters(newCounters);
    //     }
    // };

    const addCat = (name, count) => {
        console.log('AddCat: ' + name + " " + count);
        const newCounters = [...counters, {
            id: Math.random(),
            name,
            livesCount: count
        }];
        setCounters(newCounters);
    };

    return (
        <div className="App">
            <Header/>
            <div id="main-container" className="container p-3 my-3 border">
                <div className="container border cat-total">
                    <strong>Total Lives</strong>: {calculateTotalCatLives()}

                    <button className="reset-button"
                            onClick={() => resetAllCats()}>
                        <FontAwesomeIcon icon="skull-crossbones"/>{' '} Reset
                        All the Cats
                    </button>

                    <button className="revive-button"
                            onClick={() => reviveAllCats()}>
                        <FontAwesomeIcon icon="medkit"/>{' '} Revive All the
                        Cats
                    </button>
                </div>
                <div className="row row-eq-height">
                    {counters.map(el => <Counter key={el.id}
                                                 counter={el}
                                                 incrementLives={incrementLives}
                                                 decrementLives={decrementLives}
                                                 resetCat={resetCat}
                                                 reviveCat={reviveCat}
                                                 removeCat={confirmRemoveCat}
                    />)}
                </div>
                <AddCounter onSubmit={() => addCat()} addCat={addCat}/>
                <ConfirmDeleteCat
                    name={confirmDeleteCatCounter.name}
                    onSuccess={removeConfirmedCat}
                    onCancel={cancelConfirmRemoveCat}
                />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
