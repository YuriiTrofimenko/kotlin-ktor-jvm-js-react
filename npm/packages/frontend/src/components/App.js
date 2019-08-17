import React, { Component } from 'react';
//import logo from '../logo.svg';
import './App.css';
import Transfers from './Transfers'

class App extends Component {
    render() {
        return <div style={{padding: 40}}>
            <Transfers></Transfers>
        </div>
    }
}

export default App;
