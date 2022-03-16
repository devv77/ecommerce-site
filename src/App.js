import React from 'react';
import  { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInPage from './pages/signinpage/signin.component'
import { auth } from './components/firebase/firebase.utils';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  unsubscribeFromAuth=null

  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      //console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      //<Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SignInPage} />
        </Switch>
      </div>
      //</Router>
    );
  }
}

export default App;
