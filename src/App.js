import React, { Component } from 'react';
import '../node_modules/bulma/css/bulma.css';
import './App.css';
import Dashboard from './components/Dashboard';
class App extends Component {

    render() {
        return (
            <div className="app">
                <Dashboard />
            </div>
        )
    }
}

export default App;
