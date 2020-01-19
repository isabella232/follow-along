import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Page from './components/Page'
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import NotFound from "./components/NotFound";

import WithAuthentication from "./components/HOC/WithAuthentication";
import WithProviders from "./components/HOC/WithProviders";

const App = props => {
  return (
    <WithProviders>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Page} />
            <Route path="/login" exact component={Login} />

            <WithAuthentication>
              <Route path="/logout" exact component={Logout} />
            </WithAuthentication>

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </WithProviders>
  );
};

export default App;
