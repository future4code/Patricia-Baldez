
import * as React from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import moment from "moment";
import {
  MainDiv,
  SelectLotto,
  BallsContainer,
  AllBalls,
  LeftSection,
  RightSection,
  Text,
  InfoContainer,
  Header,
  MiddleContainer,
  GameName,
} from "./styled";
import { Trevo } from "../../img/Trevo";
import megasena from "../../img/megasena.svg";
import lotomania from "../../img/lotomania.svg";
import quina from "../../img/quina.svg";
import timemania from "../../img/timemania.svg";
import lotofacil from "../../img/lotofacil.svg";
import diadesorte from "../../img/diadesorte.svg";
import mmegasena from "../../img/mobile/mmegasena.svg";
import mlotomania from "../../img/mobile/mlotomania.svg";
import mquina from "../../img/mobile/mquina.svg";
import mtimemania from "../../img/mobile/mtimemania.svg";
import mlotofacil from "../../img/mobile/mlotofacil.svg";
import mdiadesorte from "../../img/mobile/mdiadesorte.svg";
import { MediaMatcher } from 'react-media-match';

const HomePage = () => {
  const {
    games,
    selected,
    setSelected,
    concursos,
    resultado,
    setLuck,
    luck,
    name,
    setName,
  } = React.useContext(GlobalStateContext);

  
  const getSelected = (event) => {
    setSelected(event ? event.target.value : 0);
  };
  {
    if (selected) {
      setLuck(concursos[selected]);
      setName(games[selected]);
    }
  }

  React.useEffect(() => {
    getSelected();
  }, [selected]);
  
  const dropDown =
    games &&
    games.map((game) => {
      return (
        <option key={game.nome} value={game.id}>
          {game.nome.toUpperCase()}
        </option>
      );
    });

  const numbers =
    resultado &&
    resultado.numeros &&
    resultado.numeros.map((number) => {
      return <BallsContainer>{number}</BallsContainer>;
    });

  

  const dia = moment(resultado.data).format("DD/MM/YYYY");

  const getColor = () => {
    switch (name.nome) {
      case "mega-sena":
        return megasena;
      case "lotomania":
        return lotomania;
      case "quina":
        return quina;
      case "timemania":
        return timemania;
      case "dia de sorte":
        return diadesorte;
      case "lotofácil":
        return lotofacil;
      default:
        return megasena;
    }
  };

  const mobileColor = () => {
    switch (name.nome) {
      case "mega-sena":
        return mmegasena;
      case "lotomania":
        return mlotomania;
      case "quina":
        return mquina;
      case "timemania":
        return mtimemania;
      case "dia de sorte":
        return mdiadesorte;
      case "lotofácil":
        return mlotofacil;
      default:
        return mmegasena;
    }
  };

  return (
    <MainDiv>
      <MediaMatcher
  mobile={ <LeftSection color={mobileColor()}>
        <Header>
          <SelectLotto onChange={getSelected}>{dropDown}</SelectLotto>
        </Header>
        <MiddleContainer>
          <Trevo />
          <GameName>{name.nome.toUpperCase()}</GameName>
        </MiddleContainer>
        <InfoContainer>
          <b>CONCURSO Nº {luck ? luck.concursoId : <p>Aguarde o resultado</p>} 
          </b>
        </InfoContainer>
      </LeftSection>}

  desktop={    
  <LeftSection color={getColor()}>
        <Header>
          <SelectLotto onChange={getSelected}>{dropDown}</SelectLotto>
        </Header>
        <MiddleContainer>
          <Trevo />
          <GameName>{name.nome.toUpperCase()}</GameName>
        </MiddleContainer>
        <InfoContainer>
         <h6> CONCURSO</h6>
          <b>
            {luck ? luck.concursoId : <p>Aguarde o resultado</p>} - {dia}
          </b>
        </InfoContainer>
      </LeftSection>
    }
/>
  
      <RightSection>
        <AllBalls>{numbers}</AllBalls>
        <Text>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </Text>
      </RightSection>
    </MainDiv>
  );
};

export default HomePage;