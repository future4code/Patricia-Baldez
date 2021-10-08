import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Favorito from "./components/img/";
import BotaoCertinho from "../BotaoCertinho.svg"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "rgb(247,92,3)"
      },
    }
  });

const BackButton = styled.img`
    position: fixed;
    top: 25px;
    left: 40px;
    cursor: pointer;
    width: 30px;

    :hover {
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
    }
`;

const FavoritoButton = styled.div`
    position: fixed;
    top:20px;
    left: 55px;
`;

const List = styled.ul`
  padding: 0 10px;
  position: fixed;
  top: 60px;
  left: 20px;
`;

const ListItem = styled.li`
  position: relative;
  height: 70px;
  padding: 10px;
  display: flex;
  list-style: none;
  width: 100%;
  transition: 0.2s;
  cursor: pointer;
  
  :hover {
    background: #eee;
  }
  
  :last-child {
    border: unset;
  }
  
  :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.1);
    		content: "";
			}
   }
`;

const Avatar = styled.div`
  height: 100%;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  background: url(${props => props.src});
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const ListText = styled.p`
  user-select: none;
`;

const TelaMatches = props => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        if (getMatches) {
            getMatches();
        }
      }, []); 

    const getMatches = (props) => {
        axios
        .get(
            `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`
        )
        .then (response => {
            setMatches(response.data.matches)
        })
        .catch (error => {
            console.log(error)
        })
    }

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <div>
                    <BackButton src={BotaoCertinho} onClick={props.changePage}/>
                    <FavoritoButton>
                        <Favorito 
                            color="primary"
                            cursor="pointer"
                        />
                    </FavoritoButton>
                </div>
                <List>
                    {matches.length === 0 && <div>Carregando...</div>}
                    {matches && matches.map(match => {
                        return (
                            <ListItem key={match.name}>
                                <Avatar src={match.photo} />
                                <ListText>{match.name}</ListText>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        </MuiThemeProvider>
        
    )
}
  
export default TelaMatches;