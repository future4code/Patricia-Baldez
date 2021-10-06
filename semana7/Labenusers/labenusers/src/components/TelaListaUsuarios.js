import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const cardUsuario = styled.div`
width: 300px;
padding: 30px;
margin: 0 auto;
justify-content: space-between;
display:flex;
border: 1px solid black;

`
export default class TelaListaUsuarios extends React.Component{
    state = {
        usuarios: []
    }
    
    componentDidMount() {
    this.pegarUsuarios()
    }

    pegarUsuarios = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    //         axios.get(url,{
    //             headers:{
    //         authorization: "patricia-baldez-maryam"
    //     }
    //     })
    //   .then((res) => {
    //       this.setState({usuarios: res.data})

    //   })
    //   .catch((err) => {
    //       alert("Ocorreu erro, tente novamente")

    //   })
    try {
        const res = await axios.get(url,{
            headers: {
                Authorization: "patricia-baldez-maryam"
            }
        })
        this.setState({usuarios: res.data})
    }catch(err) {
        alert("Ocorreu um erro, tente novamente!")
    }
    }

      deletarUsuario = (id) => {
          const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
          axios.delete(url, {
              headers: {
                  Authorization: "patricia-baldez-maryam"
              }
          })
          .then((res) => {
              alert("Usuario(a) deletado com sucesso!")     

          })
          .catch((err) => {
              alert("Ocorreu um erro, tente novamente")
        
          })
        
        } 
      
    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
              <div>
            <cardUsuario key={user.id}>
                {user.name}
                <button onClick={()=>this.deletarUsuario(user.id)}> X </button>
                </cardUsuario>
               </div> 
            )
        
            })
      
        return (
            <div>
                <cardUsuario>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuarios</h2>
                </cardUsuario>
                {listaUsuarios}
                
            </div>
         )}
        }
    
     



