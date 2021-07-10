import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => (
  <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/universes">Universes</Link>
        </li>
        <li>
          <Link to="/stars">Stars</Link>
        </li>
        <li>
        <Link to="/imprint">Imprint</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/universes">
        <Universes />
      </Route>
      <Route path="/stars">
        <Stars />
      </Route>
      <Route path="/imprint">
        <Imprint />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
</Router>
);


function Home() {
  return <h2>Home</h2>;
}

function Universes() {
  return <h2>Universes</h2>;
}

function Imprint() {
  return <h2>Imprint </h2>;
}

function Stars() {
  return <h2>Stars</h2>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
