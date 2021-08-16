import React from "react";
import Email from "./components/Email.jsx";
import { Route,Switch } from "react-router-dom";
import Password from "./components/Password.jsx";


const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/" component={Email} />
          <Route  path="/password"  component={Password} />
          <Route path='/nexotto' component={() => { 
              window.location.href = 'https://nexotto.com/'; 
                return null;
          }}/>
        </Switch>
      </div>
    </div>
  );
};

export default App;
