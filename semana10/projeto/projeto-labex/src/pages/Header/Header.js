import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const HeaderContainer=styled.div`
display:flex;
justify-content: space-around;
background-color: black;

p{
  color:white;
  font-size: 100px;
  font-family: 'Audiowide', cursive;
}
`
const ButtonHeader=styled.button`
background-color: #A62A2A;
height:70px;
// margin-top:0.5em;
color:white;
padding:0.5em;
font-family: 'Audiowide', cursive;
border-radius:90px;   
font-size: 20px;
`
const Header=() =>{
  const history = useHistory()
  const goToLoginPage = () => {
    history.push("/LoginPage")
  };
  const goToListTripsPage = () => {
    history.push("/ListTripsPage")
  };
  const goToHomePage = () => {
    history.push("/")
  };
  return (
    < HeaderContainer>
      <p>LabeX</p>
        <ButtonHeader onClick={goToHomePage}> Home </ButtonHeader>
        <ButtonHeader onClick={goToListTripsPage}> Inscreva-se</ButtonHeader>
        <ButtonHeader onClick={goToLoginPage}> Fazer Login</ButtonHeader>
    </ HeaderContainer>
  );
}
export default Header;