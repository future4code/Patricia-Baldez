import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardVideo = (props) => {
    return (
        <Card sx={{ width: 320, maxWidth: '100%', height: 320, maxHeight: '100%'}} onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image={props.thumbnail}
                />
                <CardContent>
                    <Typography variant="body1" mb={1}>{props.title}</Typography>
                    <Typography variant="body2" mb={1}>{props.channelTitle}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardVideo