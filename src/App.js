import React from "react";
import './App.css';
import LifecycleEx from './components/R007_LifecycleEx.js'

function App() {
  return (
  <div>
    <h1>Start React 200!</h1>  
    <p>CSS 적용하기</p>
    <LifecycleEx
    prop_value = 'FromApp.js'
    />
  </div>
  );
}

export default App;
