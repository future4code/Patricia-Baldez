import { Button, TextField } from '@material-ui/core'
import React from 'react'
import PageTitle from '../../components/PageTitle'
import { LoginForm } from './styles'

const LoginPage = ()=>{
    return (
        <div>
        <PageTitle title={"Login"}/>
        <LoginForm>
            <TextField label={'Email'}type={'email'}/>
            <TextField label={"Senha"}type={'password'}/>
            <Button variant={'contained'} color={'primary'}type={'submit'}>Entrar</Button>
        </LoginForm>
        </div>
    )
}

export default LoginPage
