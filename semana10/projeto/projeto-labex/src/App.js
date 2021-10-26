import React from 'react'
import Router from './router/Router'
import styled from 'styled-components'



const AppContainer=styled.div`
bottom: 0px;
margin:0px;
width:100vw;
height:100%;
background-repeat: no-repeat;
background-size:cover;

`



function App() {
  return (
    <AppContainer>
        <Router/>
    </AppContainer>
       
  );
}

export default App;




