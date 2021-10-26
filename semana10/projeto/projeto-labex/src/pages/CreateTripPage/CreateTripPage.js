import React from 'react'
import {useHistory } from 'react-router-dom'
 import { useForm } from '../../hooks/useForm'
 import { useProtectedPage } from '../../hooks/useProtectedPage'
import styled from 'styled-components'
import axios from "axios"
import AdmHeader from '../AdmHeader/AdmHeader'

const ContainerForm= styled.div`
display:flex;
flex-direction: column;
align-items: center;
h1{
  color:white;
}
height:100vh;
`
const Form= styled.form`
display:flex;
flex-direction: column;
align-items: center;
margin:2em;
`
const Input= styled.input`
padding: 10px;
width: 300px;
margin: 0.5em;
`
const Select= styled.select`
padding: 10px;
width: 320px;
margin: 0.5em;
`
const ButtonForm=styled.button`
background-color: rgba(0,0,0,0.8);
height:70px;
margin-top:1.5em;
color:white;
padding:0.5em;
font-family: 'Audiowide', cursive;
border-radius:30px;   
font-size: 20px;
`
function CreateTripPage() {

  const history=useHistory()
  const goToHomePage=()=>{
    history.push('/')
  } 
   useProtectedPage()
  
   const { form, onChange } = useForm({ name: "", planet: "", date:"", description:"",durationInDays: "" })
    const handleInputChange = (event) => {
      const { value, name } = event.target;
      onChange(value, name)
    };
    const onSubmitForm = (event) => {
      event.preventDefault()
      submitCreateTripForm()
    };
  const submitCreateTripForm = () => {
    const axiosConfig = {
      headers: { auth: localStorage.getItem("token") }
  }
    axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/patricia-baldez-maryam/trips`,form,axiosConfig)
        .then((response) => {
         alert("Viagem Criada com suceso!")
         console.log("OK", response)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
      <AdmHeader/>
      <ContainerForm>
        <h1>Criar Viagem </h1>
        <Form onSubmit={onSubmitForm}>
          <Input
            value={form.name}
            placeholder={"Nome da Viagem"}
            onChange={handleInputChange}
            name={"name"}
            type={"text"}
            pattern={"(.*[a-z]){5}"}
            required
          />
          <Select placeholder={"Planeta"} 
          onChange={handleInputChange} 
           value={form.planet}
          name={"planet"}
          type={"text"}
          required>
            <option  key="Mercúrio" value="Mercúrio">Mercúrio</option>
            <option  key="Vênus" value="Vênus">Vênus</option>
            <option  key="Terra" value="Terra">Terra</option>
            <option  key="Marte" value="Marte">Marte</option>
            <option  key="Júpter" value="Júpter">Júpter</option>
            <option  key="Saturno" value="Saturno">Saturno</option>
            <option  key="Urano" value="Urano">Urano</option>
            <option  key="Netuno" value="Netuno">Netuno</option>
            <option  key="Plutão" value="Plutão">Plutão</option>
          </Select>
          <Input
            value={form.durationInDays}
            placeholder={"Duração em Dias"}
            onChange={handleInputChange}
            name={"durationInDays"}
            type={"number"}
            min="50"
            required
          />
          <Input
            value={form.date}
            placeholder={"Data"}
            onChange={handleInputChange}
            name={"date"}
            type={"date"}
            min={"2020-11-19"}
            required
          />
           <Input
            value={form.description}
            placeholder={"Descrição da Viagem"}
            onChange={handleInputChange}
            name={"description"}
            type={"text"}
            pattern={"(.*[a-z]){30}"}
            required
          />
          <ButtonForm onClick={onSubmitForm}>Inscrever-se</ButtonForm>
        </Form>
      </ContainerForm>
    </div>
  )
}

export default CreateTripPage;
