import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './components/LandingPage'
import RecipeFinder from './components/RecipeFinder'


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/recipe">
              <RecipeFinder />
            </Route>

            <Route path="/" exact>
              <LandingPage />
            </Route>
          </Switch>
      </Router>
    
    </div>
  );
}

export default App;
