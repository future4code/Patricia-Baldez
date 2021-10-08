import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DeleteIcon from "../DeleteOutline.svg"
import MatchIcon from "../MatchIcon.png"

const ClearBox = styled.div`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    bottom: 0;
`;

const ClearButton = styled.img`
    width: 40px;
    position: fixed;
    top: 32px;
    right: 25px;
    cursor: pointer;
    
    :hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
    }
`;

const MiniMatchIcon = styled.img`
    width: 40px;
    position: fixed;
    top: 18px;
    right: 25px;
    cursor: pointer;
`;

const ClearMatches = props => {
    const [profile, setProfile] = useState({});
    
    useEffect(() => {
      }, []);  

    const clearMatches = () => {
        axios
        .put(
            `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/renata-karato-mello/clear`, {
                id: profile.id
            }
        )
        .then (response => {
            window.alert("Matches apagados com sucesso!")
        })
        .catch (error => {
            console.log(error)
        })
    }


    return (
        <ClearBox>
            <MiniMatchIcon src={MatchIcon} />
            <ClearButton src={DeleteIcon} onClick={clearMatches} />
        </ClearBox>
    )
}
  
export default ClearMatches;