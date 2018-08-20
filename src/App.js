import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import './App.css';

// components
import UsMap from './components/Map.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import NavHeader from './components/NavHeader.js'
import State from './components/State.js'


// APP
const App = () => {
  return (
    // delete when deploying to custom URL
    <Router basename='/d4d-map'>
      <div>
        <NavHeader />
        <Route path='/State/:id' exact component={State} />
        <Route path='/About' exact component={About} />
        <Route path='/Contact' exact component={Contact} />
        <Route exact path='/' component={UsMap} />
      </div>
    </Router>
  );
};

export default App;