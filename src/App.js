import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import EmployeeList from "./components/EmployeeList";
import { Provider } from "react-redux";
import store from "./store";
import { ProtectedRoute } from "./protected.route";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <ProtectedRoute
              path="/dashboard"
              component={EmployeeList}
            ></ProtectedRoute>
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
