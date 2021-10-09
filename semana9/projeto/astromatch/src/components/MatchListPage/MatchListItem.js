import React from "react"
import styled from "styled-components"

const ListItemContainer = styled.div`
display: flex;
align-items:center;
border-bottom: 1px solid gray;

:hover {
    background-color: rgba(0,0,0,0.1)
}

`
const Avatar = styled.img`
border-radius: 50%;
margin-right: 8px;
`
function MatchListItem (){
    return (
        <ListItemContainer>
            <Avatar src = {'https://picsum.photos/30/30'}/>
            <p>Nome da Pessoa</p>
        </ListItemContainer>
    )
}
export default MatchListItem