import React from "react"
import ChooseButtons from "./ChooseButtons"
import ProfileCard from "./ProfileCard"


function ChooseProfilePage (){
    const profileToChoose = {
        "profile": {
          "id": "xUrxMGvODWZa4ZASbfwx",
          "age": 26,
          "name": "Carol Danvers",
          "photo": "https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp",
          "bio": "Gosto de voar e de gatos. Procuro relações que respeitem minha independência."}
      }
    return (
        <div>
            <ProfileCard profile = {profileToChoose}/>
            <ChooseButtons/>
        </div>
    )
}
export default ChooseProfilePage