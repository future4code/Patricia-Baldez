import React from "react"
import styled from "styled-components"

const AppBarContainer = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid lightgray;
align-items: center;
padding: 0 8px;
`

function AppBar (){
    return (
        <div>
            <AppBarContainer>
            <button>Escolher </button>
            <p>astromatch</p>
            <button>Lista</button>
            </AppBarContainer>
        </div>
    )
}
export default AppBar