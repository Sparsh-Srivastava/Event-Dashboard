import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Table from "./Table";
import NewEvent from "./NewEvent";
import UserPage from "./User";
import Landing from "./landing";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Context from "./Context";

function App(props) {
  const [getusername, setUsername] = useState("");
  return (
    <Context>
      <Router>
        {/* <div>
        <div className="content">
          
          {/* <Route path="/login" component={login} /> */}
        {/* <Route path="/signin" component={signin} /> */}
        {/* </div> */}
        {/* </div> */}
        <Route exact path='/'>
          <Landing />
        </Route>
        <Switch>
          <Route exact path='/login'>
            <Login handleUsername={setUsername} />
          </Route>
          <Route exact path='/signIn'>
            <Register />
          </Route>
          <ProtectedRoute
            username={getusername}
            exact
            path='/dashboard'
            component={Home}
          />
          <ProtectedRoute
            exact
            username={getusername}
            path='/newevent'
            component={NewEvent}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path='/user'
            username={getusername}
            component={UserPage}
          ></ProtectedRoute>
          <Route exact path='/user/:id'>
            <Home />
          </Route>
          <Route exact path='/table'>
            <Table />
          </Route>
        </Switch>
      </Router>
    </Context>
  );
}

export default App;
