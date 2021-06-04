import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./components/home/HomePage";
import useSessionStorageState from "./utils/SessionStorageState";
import NavigationBar from "./utils/NavigationBar";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import MenuPage from "./components/menu/MenuPage";
import HistoryPage from "./components/history/HistoryPage";
import { auth } from "./utils/Firebase";

import "./styles/App.scss";

function App() {
  const [userName, setUserName] = useSessionStorageState("", "userName");

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <NavigationBar userName={userName} setUserName={setUserName} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <HomePage {...props} userName={userName} />}
          />
          <Route
            path="/login"
            render={(props) => <Login {...props} setUserName={setUserName} />}
          />
          <Route path="/register" component={Register} />
          <Route
            path="/menu"
            render={(props) =>
              auth.currentUser ? (
                <MenuPage {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            path="/history"
            render={(props) =>
              auth.currentUser ? (
                <HistoryPage {...props} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
