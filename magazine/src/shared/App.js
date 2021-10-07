import './App.css';
import React from 'react';
// 라우터 
import {BrowserRouter, Route} from "react-router-dom"
import PostList from '../pages/PostList';

function App() {
  return (
    <BrowserRouter>
      <Route path = "/" exact component ={PostList} />
    </BrowserRouter>
  );
}

export default App;
