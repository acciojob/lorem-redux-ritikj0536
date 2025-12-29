import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./Login";
import PlayGround from "./PlayGround";
import PrivateRoute from "./PrivateRoute";
import "../styles/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">
      <p>
        {isAuthenticated
          ? "Logged in, Now you can enter PlayGround"
          : "You are not authenticated, Please login first"}
      </p>

      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {isAuthenticated && <li>Hi Welcome to Code PlayGround</li>}
      </ul>

      <Switch>
        <PrivateRoute
          path="/playground"
          component={PlayGround}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />

        <Route
          path="/login"
          render={() => (
            <Login setIsAuthenticated={setIsAuthenticated} />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
