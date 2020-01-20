import React from 'react';
import './App.css';
import Menu from './Menu';
import Dashboard from './Dashboard';
import About from './About';

import Contact from './Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




function App() {
    return (
        <BrowserRouter>
            <div>
                <Menu/>
                <Switch>
                    <Route path="/" exact component={About} />
                    <Route path="/about" component={Dashboard} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/contact" component={Contact} />

                </Switch>

            </div>
        </BrowserRouter>
    );
}
export default App;

