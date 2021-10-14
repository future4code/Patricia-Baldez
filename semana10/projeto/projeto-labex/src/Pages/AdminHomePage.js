import React from 'react';
import {useHistory} from 'react-router-dom'

function AdminHomePage() {
  const history = useHistory()
  const goBack = () =>{
    history.goBack()
  }
  const goToHome = ()=>{
    history.push("/")
  }
  return (
    <div>
      AdminHomePage
      <p>AdminHomePage</p>
      <button onClick={goBack}>Voltar para Home</button>
      <button onClick={goToHome}>Inscreva-se</button>
    </div>
  );
}

export default AdminHomePage;