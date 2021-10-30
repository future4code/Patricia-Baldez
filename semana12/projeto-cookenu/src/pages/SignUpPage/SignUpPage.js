import React from "react"
import { useHistory } from "react-router-dom"
import logo from "../../assets/logo.jpg"
import {ScreenContainer} from "./styled"
import {LogoImage} from "./styled"
import SignUpForm from "./styled"

const SignUpPage = () => {
   const history = useHistory()
    return (
        <ScreenContainer>
            <LogoImage src={logo} />
            <SignUpForm/>
        </ScreenContainer>
    )

}
export default SignUpPage