import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import productsReducer from './components/reducers/productsReducer';
import GlobalStyle from './components/styles/GlobalStyles';

const store = createStore(productsReducer);

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <Provider store={store}>
        <BrowserRouter>
        <Header/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/cart" component={Cart}/>
            </Switch>
      </BrowserRouter>
    </Provider>
   </React.Fragment>
  );
};

export default App;
