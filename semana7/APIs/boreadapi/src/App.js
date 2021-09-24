import React from "react"
import axios from "axios"
// import "./styles.css"

export default class App extends React.Component{
  state={
    activity:{}
  }
  getActivity = () => {
    axios.get("https://www.boredapi.com/api/activity/")
    .then((res)=>{
      console.log(res.data)
      this.setState({activity: res.data})
    })
    .catch((err)=>{
      console.log(err.data)

    })
  }
  render(){
    // const {activity, type, participants, price} = this.state.activity
    //  this.getActivity()
  return(
  <div className = "App">
  <h1>Esta entendido?</h1>
  <button onClick = {this.getActivity}>Clique aqui!</button>
  <hr />
  <h3>Atividade</h3>
  <p>Nome:{this.state.activity.activity}</p>
  <p>Tipo:{this.state.activity.type}</p>
  <p>Participantes:{this.state.activity.participants}</p>
  <p>Preco:{this.state.activity.price}</p>
  {/* <p>Nome:{activity}</p>
  <p>Tipo:{type}</p>
  <p>Participantes:{participants}</p>
  <p>Preco:{price}</p> */}
  
  </div>
   );
  }
}