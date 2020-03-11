import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from "./components/Counter";
import AddCounter from "./components/AddCounter";
import ConfirmDeleteCat from "./components/ConfirmDeleteCat";
import CatList from "./components/CatList";
import AllCatsActions from "./components/AllCatsActions";

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
    return (
        <div className="App">
            <Header/>
            <div id="main-container" className="container p-3 my-3 border">
                <AllCatsActions/>
                <CatList/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;