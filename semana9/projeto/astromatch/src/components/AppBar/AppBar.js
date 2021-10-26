import React from "react"
import styled from "styled-components"

const AppBarContainer = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid lightgray;
align-items: center;
padding: 0 8px;
`

function AppBar (props){
    return (
        <div>
            <AppBarContainer>
            <button onClick = {props.goToChooseProfilePage}>Escolher </button>
            <p>astromatch</p>
            <button onClick = {props.goToMatchListPage}>Lista</button>
            </AppBarContainer>
        </div>
    )
}
export default AppBar