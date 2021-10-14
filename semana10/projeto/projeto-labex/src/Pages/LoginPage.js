import React from "react"
import {useHistory } from 'react-router-dom';
export const LoginPage =() => {
  const history = useHistory()
  const goToHomePage = () =>{
    history.push("/HomePage")
  }
  
  return (
    <div>
      <h3>LoginPage</h3>
      <p>Login</p>
      <p>Email</p>
      <p>Senha</p>
    
     <button onClick={goToHomePage}>Voltar</button>
     <button type={"submit"}>Entrar</button>
     
    </div>
  )
}

export default LoginPage;