import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { FormContainer } from '../../components/FormContainer'
import PageTitle from '../../components/PageTitle'


const CreateTripPage = () => {
    return <div>
        <PageTitle title={"Login"}/>
        <FormContainer>
            <TextField label={'Nome'}/>
            <TextField label={'Planeta'}/>
            <TextField label={'Data'}/>
            <TextField label={'Descricao'}/>
            <TextField label={'Duracao em dias'}type={'number'}/>
            
            <Button variant={'contained'} color={'primary'}type={'submit'}>Entrar</Button>
        </FormContainer>
        </div>
    
}
export default CreateTripPage