import React from 'react';
import {useHistory } from 'react-router-dom';

export const CreateTripPage =() => {
  const history = useHistory()
  const goToAdminHomePage = () =>{
    history.push("/AdminHomePage")
  }
  
  return (
    <div>
      <h3>Criar Viagem</h3>
      <p>CreateTripPage</p>
      

     <h3></h3>

     
     <button onClick={goToAdminHomePage}>Voltar</button>
     <button type={"submit"}>Enviar</button>
     
    </div>
  )
}

export default CreateTripPage;