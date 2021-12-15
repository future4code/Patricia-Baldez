import { Button, Link, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import PageTitle from '../../components/PageTitle'
import {TripsListPageContainer } from './styles'

const TripsListPage = ()=>{
    return <TripsListPageContainer>
       
        <PageTitle title={'Lista de Viagens'}/>
        
        <Link to={'/viagens/criar'}>
        <Button variant={'contained'}color={'primary'}> Criar Viagem </Button>
        </Link>
        <List component="nav" arial-label="secondary mailbox folders">
         <Link to={'/viagens/detalhe'}>
            <ListItem button>
            <ListItemText primary="Viagem para marte"/>
            </ListItem>
            </Link>
            <Link to={'viagens/detalhe'}>
            <ListItem button>
            <ListItemText primary ="Viagem para lua"/>
            </ListItem>
            </Link>
      </List>
      </TripsListPageContainer>
  

    
}

export default TripsListPage