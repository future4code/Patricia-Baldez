// import logo from './logo.svg';
 import './App.css';
import React from "react"
import axios from 'axios';


const headers = {
  headers: {
    Autorization: "patricia-baldez-maryam"
  }
}

export default class App extends React.Component() {
  state = {
    playlist:[],
    nomeMusica:"",
    nomeArtista:"",
    linkMusica:""
  }
  inserirMusica =(event) =>{
    this.setState({nomeMusica: event.target.value})
  }
  inserirArtista =(event) =>{
    this.setState({nomeMusica: event.target.value})
  }
  inserirUrl =(event) =>{
    this.setState({nomeMusica: event.target.value})
  }
  adcionarMusica = (id)=>{
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
  
  const body={
    name:this.state.nomeMusica,
    artist: this.state.linkMusica,
    url: this.state.linkMusica
  }
  axios.post(url,body,headers)
  .then((res)=>{
    alert("voce adcionou a sua musica.")
    this.setState({nomeMusica:"",nomeArtista:"",linkMusica:""})  
  })
  .catch((err)=>{
    alert(err.response.data.message)
  })
}

  render() {
    const playlists = this.state.playlist.map((item)=>{
      return(
        
        <option value={item.id}>
          {item.name}
        </option>       
    )
    })
    return(
      <div>
        <h3> LABEFY </h3>
        <input
        placeholder= "Nome da Musica"
        value={this.state.nomeMusica}
        onChnage={this.state.inserirMusica}
       />
       <br></br>
       <h3> Adcionar Musica </h3>
        <input
        placeholder={"Nome do Artista"}
        value={this.state.nomeArtista}
        onChnage={this.state.inserirArtista}
       />
       <br></br>
       <h3> Adcionar Musica </h3>
        <input
        placeholder={"Link da Musica"}
        value={this.state.linkMusica}
        onChnage={this.state.inserirUrl}
        /> 
        <button onClick = {this.adcionarMusica}>Adcionar</button>
       </div>
  )

    }}
