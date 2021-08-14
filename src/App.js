import React from "react";
import Email from "./components/Email.js";
import { Route,Switch } from "react-router-dom";
import Password from "./components/Password";


const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/" component={Email} />
          <Route  path="/password" component={Password} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
