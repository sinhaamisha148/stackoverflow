import React from "react";
import "./App.css";
import Head from "./components/Head/Head";
import{
  BrowserRouter as Router, Switch,Route, Redirect
} from 'react-router-dom';
import StackOverflow from './components/StackOverflow';

function App() {
  return (
    <div className="App">
      <Router>
        <Head/>
        <Switch>
          <Route exact path="/" component={StackOverflow}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
