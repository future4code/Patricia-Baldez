import React from "react";
import axios from "axios";
import Register from "./components/Register"
import UserList from "./components/UserList"
import './App.css'

const headers = {
  headers:{
  Autorization: "patricia-Baldez-maryam"
  }
}
 class App extends React.Component{
  state = {
    paginaCadastro: false,
    ListaNomes:[],
    inputNovoNome:"",
    inputNovoEmail:"",
  }
  componentDidMount(){
    thisgetAllUsers();
  }
  onChangeinputNovoNome = (e) =>{
    this.setState({inputNovoNome: e.target.value});
  };
  onChangeinputNovoEmail = (e) =>{
    this.setState({inputNovoEmail: e.target.value});
  };
  createUsers = ()=>{
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      nome:this.state,inputNovoNome,
      email:this.state.inputNovoEmail,
    }
    axios.post(url,body,headers)
    .then((response)=>{
      console.log(resposta)
      this.seteState({inputNovoNome:"",inputNovoEmail:""});
      alert("Seu cadastro foi efetuado com sucesso!")
      this.getAllUsers();
    })
  
  .cath((err) =>{
    alert(err.response.data.message)
    console.log("Erro inesperado!")
  })
}
  getAllUsers = ()=> {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url,headers)
    .then((response) => {
      console.log(response)
      console.log({listaDeNomes:response.data})
      this.seteState({listaDeNomes:response.data})
    }
    )
  }
  render(){
    return (
      <div>
        {this.renderizaPagina()}
      </div>
    );
  }
}
export defaut App;
  