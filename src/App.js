import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
    <BrowserRouter>
    <Header/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
   </BrowserRouter>
   </React.Fragment>
  );
};

export default App;
