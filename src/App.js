import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './app.scss';


function App() {
  return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <div>Hello</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
