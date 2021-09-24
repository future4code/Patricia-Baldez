import axios from "axios";
import React from "react";
// import "./style.css";
// import styled from 'styled-components';
export default class App extends React.Component() {
  getMissions = ()=>{
    axios.get("https://api.spacexdata.com/v3/missions")
    .then((res)=>{
      console.log(res.data)
    })
  };
  render(){
    return (
      <div className="App">
        <h1>ollalaallalalalalaalaala</h1>
        <h1>ollalaallalalalalaalaala</h1>
      </div>
    );
  }
  }
  


