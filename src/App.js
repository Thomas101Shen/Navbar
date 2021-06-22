import React from 'react'
import './App.css';
import Navbar from './components/navbar/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages';
import About from './Pages/about';
import Services from './Pages/services';
import Products from './Pages/products';
import ContactUs from './Pages/contact-us';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/Services" exact component={Services} />
        <Route path="/Products" exact component={Products} />
        <Route path="/Contact-Us" exact component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
