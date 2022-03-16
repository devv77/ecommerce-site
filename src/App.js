import React from 'react';
import  { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInPage from './pages/signinpage/signin.component'
import './App.css';


function App() {
  return (
    //<Router>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage }></Route>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signIn' component={SignInPage} />
      </Switch>
    </div> 
    //</Router>
  );
}

export default App;
