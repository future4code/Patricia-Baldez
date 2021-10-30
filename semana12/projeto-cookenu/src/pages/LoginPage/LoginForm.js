import React from "react"
import { TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { Button } from "material-ui-core"
import {InputsContainer, LoginFormContainer} from "./styled"
import { login } from "../../services/user"
import { useHistory } from "react-router"

function LoginForm() {
    const [form, onChange, clear] = useForm({email: "", password: ""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }
    return (
        <LoginFormContainer>
                <form onSubmit={onSubmitForm}>
                    <InputsContainer>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange} 
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        required
                        type={"email"}
                        />
                        <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange} 
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        required
                        type={"password"}
                        />
                        </InputsContainer>
                        <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                         color={"primary"}
                        >
                            Fazer Cadastro!
                        </Button>
                   </form>
            </LoginFormContainer>
    )

}
export default LoginForm