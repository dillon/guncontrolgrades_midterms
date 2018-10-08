import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import './App.css';

// pages
import NavHeader from './components/NavHeader.js'
import UsMap from './pages/Map.js'
import State from './pages/State.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import ScrollToTop from './components/ScrollToTop'

// analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-127152248-1'); // Here we should use our GA id
ReactGA.pageview(window.location.pathname + window.location.hash);


// APP
// for server rendering: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#serving-apps-with-client-side-routing
const App = () => {
  return (
    // delete when deploying to custom URL
    <Router>
      <ScrollToTop>
        <NavHeader />
        <Route path='/State/:id' exact component={State} />
        <Route path='/About' exact component={About} />
        <Route path='/Contact' exact component={Contact} />
        <Route exact path='/' component={UsMap} />
      </ScrollToTop>
    </Router>
  );
};



export default App;