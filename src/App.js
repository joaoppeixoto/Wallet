import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => <Login { ...props } /> }
          />
        </Switch>

        <Switch>
          <Route
            exact
            path="/carteira"
            component={ Wallet }
          />
        </Switch>

      </div>
    );
  }
}

export default App;
