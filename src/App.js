import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import {getRoutes} from './routes/routes';
import generateStore from './redux/store'

/**
 * @return {void}
 */
function App() {
  const routesList = getRoutes().map((routeItem) => (
    <Route
      key={routeItem.path}
      exact={routeItem.exact}
      path={routeItem.path}
      component={routeItem.componente()}
    />
  ));
  const store = generateStore();

  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              {routesList}
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    </div>

  );
}

export default App;
