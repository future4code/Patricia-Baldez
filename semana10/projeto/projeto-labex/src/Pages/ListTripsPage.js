import React from 'react';
import {useHistory } from 'react-router-dom';

export const ListTripsPage =() => {
  const history = useHistory()
  const goToHomePage = () =>{
    history.push("/HomePage")
  }
  const goToApplicationFormPage = () =>{
    history.push("/ApplicationFormPage")
  }
  
  return (
    <div>
      <p>ListTripsPage</p>
   
     <h3>Lista de Viagens</h3>
     <p>Nome</p>
      <p>Descricao</p>
      <p>Planeta</p>
      <p>Duracao</p>
      <p>Data</p>
     
     <button onClick={goToHomePage}>Voltar</button>
     <button onClick={goToApplicationFormPage}>Inscreva-se</button>
     
    </div>
  )
}

export default ListTripsPage;