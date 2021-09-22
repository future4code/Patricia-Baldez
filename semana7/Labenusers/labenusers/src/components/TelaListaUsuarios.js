import React from "react";
import axios from "axios";
import styled from "styled-components";


const cardUsuario = styled.div`
border: 1px solid black;
width: 20%;
padding: 30px;
margin: 0 auto;

div{
    margin-botton:15px;
}

`;



export default class TelaListaUsuarios extends React.Component{
    state = {
        usuarios: []
    }
    
    componentDidMount() {
    this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
            axios.get(url,{
                headers:{
            authorization: "patricia-baldez-maryam"
        }
        })
      .then((resp) => {
          this.setState({usuarios: resp.data})

      })
      .catch((err) => {
          alert("Ocorreu erro, tente novamente")

      })
    }
      
    render(){
        const listaUsuarios = this.state.usuarios.map((user) => {
            
            return <cardUsuario>{user.name}</cardUsuario>
           

        })
        return(
            
            <div>

                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuarios</h2>
                {listaUsuarios}
                
            </div>
            
        )
    }
}