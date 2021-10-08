import React, { useState } from "react";
import styled from "styled-components";
import TelaPerfil from "./components/TelaPerfil";
import TelaMatches from "./components/TelaMatches";

const MainContainer = styled.div`
  width: 35vw;
  height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  background-color: white;
`;

const LogoImg = styled.img`
  width: 200px;
  position: fixed;
  top: 40px;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const App = (props) => {
  const [telaPerfil, setTelaPerfil] = useState(true);

  const onClickTrocarDeTela = () => {
    setTelaPerfil(!telaPerfil);
  };

  const trocarDeTela = () => {
    if (telaPerfil) {
      return (
        <div>
          <TelaPerfil changePage={onClickTrocarDeTela} />
        </div>
      )
    } else {
      return (
        <div>
          <TelaMatches changePage={onClickTrocarDeTela} />
        </div>
      );
    }
  };

  return (
    <MainContainer>
      <LogoImg src={Logo} />
      {trocarDeTela()}
      <div>
        <ClearMatches />
      </div>
    </MainContainer>
  );
};

export default App;