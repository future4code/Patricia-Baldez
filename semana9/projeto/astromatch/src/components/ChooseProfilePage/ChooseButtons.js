import React from "react"
import styled from "styled-components"

const ButtonsContainer = styled.div`
display: flex;
justify-content: space-around;
`

function ChooseButtons (){
    return (
        
            <ButtonsContainer>
            <button>nao</button>
            <button>sim</button>
            </ButtonsContainer>
       
    )
}
export default ChooseButtons