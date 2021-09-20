import React from "react";
import './App.css';
import styled from 'styled-components';
import Etapa1 from "/components/Etapa1";
import Etapa2 from "/components/Etapa2";
import Etapa3 from "/components/Etapa3";
import Etapa4 from "/components/Etapa4"

const Etapa1 = Styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
// flex-direction: column;

`
export default class Etapa1 extends React.Component{
    render(){
        return(
            <Principal>
                <h1>ETAPA1 - DADOS GERAIS</h1>
                <h2>1.Qual o seu nome?</h2>
                <input
                value = {this.state.inputNome}
                onChange = {this.props.onChangeNome}
                placeholder = "Nome"/>
                <h2>2. Qual a sua idade?</h2>
                <input
                value = {this.state.inputIdade}
                onChange = {this.props.onChangeIdade}
                placeholder = "Idade"/>
                 <h2>2. Qual o seu email?</h2>
                <input
                value = {this.state.inputEmail}
                onChange = {this.props.onChangeEmail}
                placeholder = "Email"/>
            </Principal>
        )
    }
}
