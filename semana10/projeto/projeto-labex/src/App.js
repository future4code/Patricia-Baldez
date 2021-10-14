import React from 'react';
import HomePage from "./Pages/HomePage";
import ListTripsPage from "./Pages/ListTripsPage";
import ApplicationFormPage from "./Pages/ApplicationFormPage";
import LoginPage from './Pages/LoginPage';
import AdminHomePage from "./Pages/AdminHomePage";
import TripDetailsPage from './Pages/TripDetailsPage';
import CreateTripPage from './Pages/CreateTripPage';
import {BrowserRouter, Switch, Route, Router} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      
      <Route exact path = {"/"}>
      <HomePage/>
      </Route>
      <Route exact path ={"/ListTripsPage"}>
      <ListTripsPage/>
      </Route> 
      <Route exact path ={"/ApplicationFormPage"}>
      <ApplicationFormPage/>
      </Route>
      <Route exact path = {"/LoginPage"}>
      <LoginPage/> 
      </Route>
      <Route exact path = {"/AdminHomePage"}>
      <AdminHomePage/>
      </Route>
      <Route exact path = {"/TripDetailPage"}>
      <TripDetailsPage/>
      </Route>
      <Route exact path = {"/CreateTripPage"}>
      <CreateTripPage/>
      </Route>
      </Switch>
      </BrowserRouter>
  );
}


