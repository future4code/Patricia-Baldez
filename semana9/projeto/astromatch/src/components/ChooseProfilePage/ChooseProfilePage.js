import  axios  from "axios"
import React, { useEffect,useState } from "react"
import ChooseButtons from "./ChooseButtons"
import ProfileCard from "./ProfileCard"

function ChooseProfilePage (){
    const [profileToChoose, setProfileToChoose] = useState ({})

    const getProfileToChoose =()=> {
        axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:patricia/person').then(response => {
            setProfileToChoose (response.data.profile)
        })

    }
        
    useEffect(() => {
        getProfileToChoose()
        },[])  

        const onClickNo = () => {
            const body = {
                choise: false,
                id: profileToChoose.id
            }
            axios.post ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:atricia/choose-person',body).then(response =>{
                console.log(response)
                getProfileToChoose()
            })
    
        }
        const onClickYes = () => {
            console.log('sim!')
    
        }

    return (
        <div>
            <ProfileCard profile = {profileToChoose}/>
            <ChooseButtons onClickNo = {onClickNo} onClickYes ={onClickYes}/>
        </div>   
      )}
  
export default ChooseProfilePage