import React from 'react';
import  { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage =()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    //<Router>
      <Switch>
        <Route exact path='/' component={HomePage }></Route>
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    //</Router>
  );
}

export default App;
