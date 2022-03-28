import React from 'react'
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { Typography } from '@mui/material';
import { ContainerNotFind } from './styled';

const NotFind = () => {
    return (
        <ContainerNotFind>
            <SentimentDissatisfiedOutlinedIcon sx={{fontSize: 60}} color='secondary'/>
            <Typography variant='h5' color='secondary'>
                Não encontramos videos com o termo buscado 
            </Typography>
        </ContainerNotFind>
    )
}

export default NotFind
