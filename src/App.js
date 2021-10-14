import React from "react";
import ShoppingList from "./components/ShoppingList";
import logIn from './components/LogIn'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={logIn} />
        <Route path="/list" component={ShoppingList} />
      </Switch>
    </Router>
    </>
  );
};

export default App;
