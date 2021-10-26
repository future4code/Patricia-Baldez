import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from '../../hooks/useProtectedPage';
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import AdmHeader from "../AdmHeader/AdmHeader";

const DetailContainer = styled.div`
 display:flex;
 justify-content:space-around;
 height:100vh;
 `
const Card = styled.div`
 width:500px;
 border:solid 2px;
 padding:1em;
 margin-top:1em;
 background-color: rgba(10,23,55,0.5);
 p,h4,h2{
   color:white;
 }
 `
 const Detail= styled.div`
    display:flex;
    justify-content:space-around;
    margin:1em;
 `
 const Photo = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    margin-right:1em;
  `
  const ButtonAcept = styled.button`
    width:50px;
    padding:0.5em;
    background-color:black;
    color:white;
    margin: 10px 10px;
    border-radius:30px;   
  `
function TripDetailPage() {

  const { id } = useParams()
  const [trips, setTrips] = useState({});
  const [candidates, setCandidates]= useState([]);
  
  useProtectedPage();

  const history=useHistory()

  const goToHomePage=()=>{
    history.push('/')
  }

  const getTripDetailPage = () => {
    const axiosConfig = {
      headers: { auth: localStorage.getItem("token") }
  }
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trip/${id}`,axiosConfig)

        .then((res) => {
        setTrips(res.data.trip);
        setCandidates(res.data.trip.candidates)
        console.log( "Detalhes",res)
        console.log("trips",trips)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getTripDetailPage()
  }, [])

  const aceptCandidate = (candidateId, approve) => {
    const axiosConfig = {
        headers: { auth: localStorage.getItem("token") }
    }
    const body = {
        approve: approve
    }
    axios
        .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/patricia-baldez-maryam/trips/${id}/candidates/${candidateId}/decide`, body, axiosConfig)
        .then((response) => {
         
          if(approve){
            alert("OK")
          }else{
            alert("error!")
          }
            console.log (response)
        })
        .catch(e => {
            console.log(e)
        })
  }

  const candidatos = candidates.map((candidate,i)=>{
    return(
    <div>
      <Detail>
       <Photo src={`https://picsum.photos/200/200?a=${i}]`}/>
        <p key={candidate.id}>Olá meu nome é {candidate.name}, tenho {candidate.age} anos, vivo no {candidate.country} e sou {candidate.profession}</p>
      </Detail>
      <p>{candidate.applicationText}</p>
      <ButtonAcept onClick={()=>{aceptCandidate(candidate.id,true)}}>Yes</ButtonAcept>
      <ButtonAcept onClick={()=>{aceptCandidate(candidate.id,false)}}>No</ButtonAcept>
    </div>
    );
  })
  return (
  <div>
      <AdmHeader/>
      <DetailContainer>
        <Card>
          <h2>Detalhes da Viagen</h2>
          <p>Atividade: {trips.name}</p>
          <p>Lugar: {trips.planet}</p>
          <p>Data: {trips.date}</p>
          <p>Duração:{trips.durationInDays}</p>
          <p>Descrição: {trips.description}</p>
        </Card>
        <Card>
          <h2>Controle de viajantes</h2>
          <h4>Atividade: {trips.name}</h4>
          {candidatos}
        </Card>
      </DetailContainer>
  </div> 
  );
}

export default TripDetailPage;