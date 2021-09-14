import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Fazer compras',
          completa: false // Indica se a tarefa está completa (true ou false)
        },
        {
          id: Date.now(),
          texto: 'Sair com os filhos',
          completa: false // Indica se a tarefa está completa (true ou false)
        },
      ],
      inputValue: '',
      filtro: 'pendentes',
    }
    
  componentDidUpdate () {
    
      // const tarefa = this.state.inputValue;
      // const textString = JSON.stringify(tarefa);
     
    }

  componentDidMount() {

  }

  onChangeInput = (event) => {
   this.setState({
     inputValue: event.target.value})
}

  criaTarefa = () => {
    const inputValue = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa:false
    }
    const novaListaDeTarefas = [ ...this.state.tarefas, inputValue]
    this.setState({tarefas: novaListaDeTarefas, inputValue:''})
  }

  selectTarefa = (id) => {
   const novaTarefa = this.setState.tarefas.map((tarefaQEstaoOuNaoPendentes)=>{
     if(id === tarefaQEstaoOuNaoPendentes.id){
       const novaTarefa = { ...tarefaQEstaoOuNaoPendentes,completa:!tarefaQEstaoOuNaoPendentes.completa}
       }
       return novaTarefa

   })
  
 }

  onChangeFilter = (event) => {
//     const tarefas = [];
// function retornaTarefa (texto){
//     if (value.charAt(0) == "S") 
//     return texto;
// }
// var resultado = tarefas.filter(retornaTarefa);
// console.log(texto);
﻿
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
