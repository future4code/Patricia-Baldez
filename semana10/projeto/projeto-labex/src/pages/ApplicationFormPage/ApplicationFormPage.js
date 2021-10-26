import React from 'react';
import {useHistory } from 'react-router-dom';

export const ApplicationFormPage =() => {
  const history = useHistory()
  const goToListTripsPage = () =>{
    history.push("/ListTripsPage")
  }
  
  return (
    <div>
      <p>ApplicationFormPage</p>
     <h3>Inscreva-se para uma viagem</h3>

     
     <button onClick={goToListTripsPage}>Voltar</button>
     <button type={"submit"}>Enviar</button>
     
    </div>
  )
}

export default ApplicationFormPage;