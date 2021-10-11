import React, { useEffect, useState } from "react"
import MatchListItem from "./MatchListItem"
import styled from "styled-components"
import axios from "axios"

const ListContainer = styled.div`
padding: 8px;
`

function MatchListPage () {
    const [matches, setMatches] = useState([])
    
      useEffect(() => {
          axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:patricia/matches').then(response => {
              setMatches(response.data.matches)
          })
        },[])
      
    return (
        <ListContainer>
            {matches.map((profile) => {
                return <MatchListItem profile = {profile} />
            })}
        </ListContainer>
        
    )
}
export default MatchListPage

