import React from 'react'
import Router from './router/Router'
import { GlobalState } from "./global/GlobalState";
import HomePage from './pages/HomePage/HomePage';

const App = () =>{
  return(
    <div>
      <GlobalState>
         <HomePage/> 
        <Router/>
      </GlobalState>
    </div>
  )
}

export default App;
