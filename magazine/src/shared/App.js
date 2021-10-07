import './App.css';
import React from 'react';
// 라우터
import { BrowserRouter, Route } from 'react-router-dom';
import {ConnectedRouter} from "connected-react-router"
import { history } from '../redux/configureStore';

import PostList from '../pages/PostList';
import Login from '../pages/Login';
import Header from '../components/Header';
import { Grid } from '../elements/index';
import Signup from '../pages/Signup';

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header />
        <ConnectedRouter history = {history}>
          <Route path="/" exact component={PostList} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup}/>
        </ConnectedRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;
