import React from 'react';
import HomePage from "./Pages/HomePage";
import ListTripsPage from "./Pages/ListTripsPage";
import ApplicationFormPage from "./Pages/ApplicationFormPage";
import LoginPage from './Pages/LoginPage';
import AdminHomePage from "./Pages/AdminHomePage";
import TripDetailsPage from './Pages/TripDetailsPage';
import CreateTripPage from './Pages/CreateTripPage';



function App() {
  return (
    <div>
      <HomePage/>
      <ListTripsPage/>
      {/* <ApplicationFormPage/>
      <LoginPage/>
      <AdminHomePage/>
      <TripDetailsPage/>
      <CreateTripPage/> */}

    </div>
  );
}

export default App;
