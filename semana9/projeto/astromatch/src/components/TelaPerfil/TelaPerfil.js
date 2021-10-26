import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Favorite from "@material-ui/icons/Favorite";

const MainContainer = styled.div`
  width: 35vw;
  height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TelaPerfil = props => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    getPerfilToChoose();
  }, []);

  const getPerfilToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`
      )
      .then(response => {
        setPhoto(response.data.perfil.photo);
        setName(response.data.perfil.name);
        setAge(response.data.perfil.age);
        setBio(response.data.perfil.bio);
        setPerfil(response.data.perfil)
      })
      .catch(error => {
        console.log(error);
      });
  };

  const choosePerson = match => {
    if (match === true) {
      axios
        .post(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`,
          {
            id: perfil.id,
            choice: true
          }
        )
        .then(resp => {
          console.log(resp.data);
        });
      getPerfilToChoose();
    } else {
      axios
        .post(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`,
          {
            id: perfil.id,
            choice: false
          }
        )
        .then(res => {
          console.log(res.data);
        });
      getPerfilToChoose();
    }
  };

  return (
    perfil && (
      <MuiThemeProvider tema={tema}>
        <MainContainer>
          <MatchButton src={MatchIcon} onClick={props.changePage} />
                  <PerfilPicture src={photo} alt="perfil" />
                  <TitleWrapper>
                    <UserName>{name},</UserName>
                    <UserAge>{age}</UserAge>
                  </TitleWrapper>
            <ThumbDownAlt
              color="secondary"
              cursor="pointer"
              onClick={() => choosePerson(false)}
              style={{ fontSize: 50 }}
            />
            <Favorite
              color="primary"
              cursor="pointer"
              onClick={() => choosePerson(true)}
              style={{ fontSize: 50 }}
            />
      
        </MainContainer>
      </MuiThemeProvider>
    )
  );
};

export default TelaPerfil;