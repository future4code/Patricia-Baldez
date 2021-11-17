import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import styled from 'styled-components'
import HomePage from "./pages/HomePage"
import ApplicationPage from "./pages/ApplicationPage"
import CreateTripPage from "./pages/CreateTripPage"
import TripDetailPage from "./pages/TripDetailPage"
import TripsListPage from "./pages/TripsListPage"
import LoginPage from './pages/LoginPage'
import { CssBaseline } from '@material-ui/core'

const AppContainer = styled.div`
display: flex;
background: #7159C1;
flex-direction: column;
align-items: center;
padding: 16px;
`
const App =() => {
  return (
  <Router>
    <CssBaseline/>
    <AppContainer>
      <Switch>
      <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/viagens/detalhe">
          <TripDetailPage/>
        </Route>
        <Route path="/viagens/criar">
          <CreateTripPage/>
        </Route>
        <Route path="/viagens">
          <TripsListPage/>
        </Route>
        <Route path="/inscricao">
          <ApplicationPage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </AppContainer>
  </Router>   
  );
}

export default App;




