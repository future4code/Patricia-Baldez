import React from "react"
import AppBar from "../AppBar/AppBar"
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage"
import MatchListPage from "../MatchListPage/MatchListPage"
import styled from "styled-components"

const MainContainer = styled.div`
border: 1px solid black;
border-radius: 3px;
width: 400px;
heigth: 600px;
margin: 30px;
display: flex;
flex-direction: column;


`


function Main (){
    return (
        <div>
            <MainContainer>
            <AppBar/>
            <ChooseProfilePage/>
            <MatchListPage/>
            </MainContainer>

        </div>
    )
}
export default Main