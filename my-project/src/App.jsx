import React from "react";
import Fixed from './components/Fixed';
import NavBar from "./components/NavBar";
import Choice from "./components/Choice";
import Button  from "./components/Button";
import Slideimage from "./components/Slideimage";
import Stock from "./components/Stock";
import './App.css';

function App() {
    return (
        <div className="App">
            <Fixed />
            <NavBar />
            <Choice />
            <Button />
            <Slideimage />
            <Stock />
        </div>
    );
}

export default App;
