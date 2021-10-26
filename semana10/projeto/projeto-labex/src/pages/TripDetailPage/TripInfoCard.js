import { Card,CardContent, Typography } from '@material-ui/core'
import React from 'react'
import TripInfoItem from './TripInfoItem'



const TripInfoCard = ()=>{
    return <Card>
        <CardContent>
            <Typography variant={'h5'} gutterBotton>
            Informações da Viagem
            </Typography>
            <TripInfoItem infoName={'Nome'}info={'Viagem para marte'}/>
            <TripInfoItem infoName={'Planeta'}info={'Marte'}/>
            <TripInfoItem infoName={'Data'}info={'01/07/2020'}/>
            <TripInfoItem infoName={'Descricao'}info={'Viagem maneira para colonizar marte'}/>
            <TripInfoItem infoName={'Duracao em dias'}info={'228'}/>
        </CardContent>
    </Card>


 
    
}

export default TripInfoCard