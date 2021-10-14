import React from 'react';
import {useHistory } from 'react-router-dom';

export const HomePage =() => {
  const history = useHistory()
  const goToListTripsPage = () =>{
    history.push("/ListTripsPage")
  }
  const goToAdminHomePage = () =>{
    history.push("/AdminHomePage")
  }
  
  return (
    <div>
   
     <h3>Labex</h3>
     
     <button onClick={goToListTripsPage}>Ver Viagens</button>
     <button onClick={goToAdminHomePage}>Area Admin</button>
     
    </div>
  )
}

export default HomePage;