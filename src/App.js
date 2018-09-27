import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import './App.css';

// pages
import NavHeader from './components/NavHeader.js'
import UsMap from './pages/Map.js'
import State from './pages/State.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'


// APP
const App = () => {
  return (
    // delete when deploying to custom URL
    <Router /*basename='/d4d-map'*/>
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