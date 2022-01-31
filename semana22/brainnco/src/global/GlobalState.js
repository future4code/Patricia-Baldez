import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Api/Api";
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [games, setGames] = useState([]);
  const [selected, setSelected] = useState("");
  const [concursos, setConcursos] = useState([]);
  const [resultado, setResultado] = useState([]);
  const [luck, setLuck] = useState({ loteriaId: 0, concursoId: "2359" });
  const [name, setName] = useState({ loteriaId: 0, nome: "mega-sena" });

  useEffect(() => {
    getLotto();
    getConcurso();
  }, []);

  useEffect(() => {
    sortGame();
  }, [selected]);

  const getLotto = () => {
    axios
      .get(`${BASE_URL}/loterias`)
      .then((res) => {
        setGames(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const getConcurso = async () => {
    await axios
      .get(`${BASE_URL}/loterias-concursos`)
      .then((res) => {
        setConcursos(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const sortGame = async () => {
    console.log(`LUCK NUMBER`, luck.concursoId);
    await axios
      .get(`${BASE_URL}/concursos/${luck.concursoId}`)
      .then((res) => {
        setResultado(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const data = {
    games,
    setGames,
    concursos,
    setConcursos,
    resultado,
    setResultado,
    selected,
    setSelected,
    luck,
    setLuck,
    name,
    setName
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
 };