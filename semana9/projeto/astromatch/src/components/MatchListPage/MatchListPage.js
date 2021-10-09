import React from "react"
import MatchListItem from "./MatchListItem"
import styled from "styled-components"

const ListContainer = styled.div`
padding: 8px;
`

function MatchListPage (){
    return (
        <div>
            <MatchListItem/>
            <MatchListItem/>
            <MatchListItem/>
            <MatchListItem/>
            <MatchListItem/>
        </div>
    )
}
export default MatchListPage

