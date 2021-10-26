import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const HeaderContainer=styled.div`
display:flex;
justify-content: space-around;

p{
  color:white;
  font-size: 100px;
  font-family: 'Audiowide', cursive;

}
`
const ButtonHeader=styled.button`
background-color: black;
// height:70px;
// margin-top:1.5em;
// color:white;
// padding:0.5em;
// font-family: 'Audiowide', cursive;
// border-radius:30px;   
// font-size: 20px;
`

const AdminHomePage=() =>{

  const history = useHistory()


  const logout = () => {
    window.localStorage.clear();
    history.push("/");
  };

  const goToCreateListPage = () => {
    history.push("/CreateTripPage")
  };

  const goToHomePage = () => {
    history.push("/")
  };

  return (
    < HeaderContainer>
      <p>LabeX</p>
        <ButtonHeader onClick={goToHomePage}> Home </ButtonHeader>
        <ButtonHeader onClick={goToCreateListPage}> Criar Viagens</ButtonHeader>
        <ButtonHeader onClick={logout}> Fazer Logout</ButtonHeader>
    </ HeaderContainer>
  );
}

export default AdminHomePage;