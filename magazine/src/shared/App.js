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

import {actionCreators as userActions} from "../redux/modules/user"
import {useDispatch} from "react-redux"; 
import {apiKey} from "./firebase"


function App() {
  const dispatch = useDispatch();
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  //is_login의 쿠키를 확인 해주는 친구
	const is_session = sessionStorage.getItem(_session_key)? true : false;

  React.useEffect(() =>{
    
    if(is_session){
      dispatch(userActions.loginCheckFB())
    }

  }, []);

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
