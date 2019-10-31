import React from 'react';
import './app.css';
import MarketContainer from './../pages/market/market-container';
import HeaderContainer from './../header/header';
import { Route, Switch } from 'react-router-dom';
import CartContainer from './../pages/cart/cart-container';

const App = () => {
  return (
    <div className='container app'>
      <HeaderContainer />
      <Switch>
        <Route 
          path='/'
          component={MarketContainer}
          exact/>
        <Route 
          path='/cart'
          component={CartContainer} />
      </Switch>
    </div>
  );
}

export default App;
