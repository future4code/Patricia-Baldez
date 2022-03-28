import React from 'react'
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useHistory } from 'react-router';

const Back = () => {
    const history = useHistory()
    return (
        <Button 
            variant="outlined" 
            color='secondary' 
            size='small'
            onClick={()=>history.goBack()}
        >
            <ChevronLeftIcon/>
        </Button>
    )
}

export default Back
