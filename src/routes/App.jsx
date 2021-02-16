import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../assets/styles/App.scss';
import Characters from '../containers/Characters';
import Favorites from '../containers/Favorites';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/favorites' component={Favorites} />
        <Route exact path='/' component={Characters} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
