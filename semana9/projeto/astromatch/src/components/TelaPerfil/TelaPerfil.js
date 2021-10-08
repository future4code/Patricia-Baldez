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
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`
      )
      .then(response => {
        setPhoto(response.data.profile.photo);
        setName(response.data.profile.name);
        setAge(response.data.profile.age);
        setBio(response.data.profile.bio);
        setProfile(response.data.profile)
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
            id: profile.id,
            choice: true
          }
        )
        .then(resp => {
          console.log(resp.data);
        });
      getProfileToChoose();
    } else {
      axios
        .post(
          `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person`,
          {
            id: profile.id,
            choice: false
          }
        )
        .then(res => {
          console.log(res.data);
        });
      getProfileToChoose();
    }
  };

  return (
    profile && (
      <MuiThemeProvider theme={theme}>
        <MainContainer>
          <MatchButton src={MatchIcon} onClick={props.changePage} />
                  <ProfilePicture src={photo} alt="Profile" />
                  <TitleWrapper>
                    <UserName>{name},</UserName>
                    <UserAge>{age}</UserAge>
                  </TitleWrapper>
                 <UserDescription>{bio}</UserDescription>  
          <BoxDislike>
            <ThumbDownAlt
              color="secondary"
              cursor="pointer"
              onClick={() => choosePerson(false)}
              style={{ fontSize: 50 }}
            />
          </BoxDislike>
          <BoxLike>
            <Favorite
              color="primary"
              cursor="pointer"
              onClick={() => choosePerson(true)}
              style={{ fontSize: 50 }}
            />
          </BoxLike>
        </MainContainer>
      </MuiThemeProvider>
    )
  );
};

export default TelaPerfil;