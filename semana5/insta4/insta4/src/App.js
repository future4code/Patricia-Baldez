import React from 'react';
import './App.css';
import Post from './components/Post/Post';

// class App extends React.Component {
//   render() {
//     return (
//       <div className={'app-container'}>
//         <Post
//           nomeUsuario={'paulinha'}
//           fotoUsuario={'https://picsum.photos/50/50'}
//           fotoPost={'https://picsum.photos/200/150'}
//         />
//         <Post
//           nomeUsuario={'joao'}
//           fotoUsuario={'https://picsum.photos/50/51'}
//           fotoPost={'https://picsum.photos/200/151'}
//         />
//         <Post
//           nomeUsuario={'amanda'}
//           fotoUsuario={'https://picsum.photos/50/52'}
//           fotoPost={'https://picsum.photos/200/152'}
//         />
//       </div>
//     );
//   }
// }
export default class App extends React.Component {
  state = {
    pessoas:[{nomeUsuario='paulinha',fotoUsuario='https://picsum.photos/50/50',fotoPost='https://picsum.photos/200/150'},
    {nomeUsuario='joao',fotoUsuario='https://picsum.photos/50/51',fotoPost='https://picsum.photos/200/151'},
    {nomeUsuario='amanda',fotoUsuario='https://picsum.photos/50/52',fotoPost='https://picsum.photos/200/152'}],
    valorInputNomeUsuario:'',
    valorInputFotoUsuario:'',
    valorInputFotoPost:''
  }
  adicionarPessoa = ()=>{
    console.log("CLICOU NO BOTAO DE ADICIONAR");
    const novaPessoa = {nomeUsuario: this.state.valorInputNome,fotoUsuario: this.state.valorInputFotoUsuario,fotoPost: this.state.valorInputFotoPost}
    const novasPessoas = [...this.state.pessoas.novaPessoa],
  this.setState({pessoas:novasPessoas, valorInputNome:'',valorInputFotoUsuario:'',})}
  onchangeInputNome = (event)=>{
    this.setState({valorInputNome:event.target.value})}
  onchangeInputeFotoUsuario = (event)=>{
    this.setState({valorInputFotoUsuario:event.target.value})}
  onchangeInputFotoPost = (event)=>{
    this.setState({valorInputFotoPost:event.target.value})}
  render(){
    const postagens = this.state.pessoas.map((usuario) =>{
      return (
        <Post
        key={usuario.key}
        nomeUsuario = {usuario.nomeUsuario}
        fotoUsuario = {usuario.fotoUsuario}
        fotoPost = {usuario.fotoPost}
        />)})
    return(
    <MainContainer>
      <Input>
      <input
      value = {this.state.valorInputNome}
      onchange = {this.onchangeInputNome}
      placeholder = 'Nome'
      />
      <input
      value = {this.state.valorInputFotoUsuario}
      onchange = {this.onchangeInputeFotoUsuario}
      placeholder = 'Foto Usuario'
      />
      <input
      value = {this.state.valorInputFotoPost}
      onchange = {this.onchangeInputFotoPost}
      placeholder = 'Foto Post'
      />
      <button onClick = {this.adicionaPessoa}>Adcionar</button>
      </Input>
      {postagens}
    </MainContainer>
    );
  }
}

 export default App;
