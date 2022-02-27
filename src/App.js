
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch, Route} from 'react-router-dom';

import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up-pages/sign-in-sign-up-pages';
import {auth, createUserProfileDocument} from './firebase/firebase.util';
import React from 'react';


class App extends React.Component {

  constructor(){
  super();
  this.state = {

    currentUser: null
  }
}

 unSubscribedfromAuth = null
   componentDidMount() {
    this.unSubscribedfromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
   
    })

   }
   componentWillUnmount() {

    this.unSubscribedfromAuth();
   }

 render() {
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
    <Switch>
    <Route exact path= '/' component={HomePage }/>
    <Route path= '/shop' component={ShopPage }/>
    <Route path= '/signin' component={SignInSignUpPage }/>
    </Switch>
    
  
    </div>
  );

 }

 
}

export default App;
