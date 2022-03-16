import React from 'react';
import  { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInPage from './pages/signinpage/signin.component'
import { auth, createUserProfileDocument } from './components/firebase/firebase.utils';
import './App.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  unsubscribeFromAuth=null

  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth => {
      //v1: this.setState({currentUser: user})
      // v2: createUserProfileDocument(user);
      //v1: console.log(user);
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          //console.log(this.state)
        });        
      }
      else{
        this.setState({currentUser: userAuth});
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      //<Router>
      <div>
        <Header currentUser={this.state.currentUser}/>
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
