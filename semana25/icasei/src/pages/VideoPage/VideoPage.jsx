import React, { useEffect, useState } from 'react'
import Back from '../../components/Back/Back'
import { ContainerVideo, CardInfo} from './styled'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router';
import { getVideoDetails } from '../../services/get';

const VideoPage = () => {
    const [videoDetails, setVideoDetails] = useState([])
    const {idVideo} = useParams()

    useEffect(()=>{
        getVideoDetails(idVideo, setVideoDetails)
    },[])

    return (
        <ContainerVideo>
            <div style={{marginBottom: 10}}>
                <Back/>
            </div>
            
            <div>
                {videoDetails.map((details, index)=>{
                    return(
                        <Card sx={{ maxWidth: '100%', height: 630, maxHeight: '100%'}} key={index}>
                            <CardHeader
                                sx={{height: 70}}
                                title={details.snippet.title}
                            />
                            <ReactPlayer
                                url = {`https://www.youtube.com/watch?v=${details.id}`}
                                width = '100%'
                                height = '380px'
                                controls = {true}
                                playing = {true}
                            />                      
                            
                            <CardContent sx={{height: 140}}>
                                <Typography gutterBottom variant="h6" component="div">
                                    {details.snippet.channelTitle}
                                </Typography>
                                
                                <Typography variant="body2" color="text.secondary" sx={{height: 80, overflow: 'hidden'}}>
                                    {details.snippet.description}
                                </Typography>
                            </CardContent>
                            <CardInfo>
                                <div>
                                    <VisibilityOutlinedIcon sx={{marginRight: 1}}/> <span>{details.statistics.viewCount}</span>
                                </div>
                                
                                <div>
                                    <ThumbUpIcon sx={{marginRight: 1}}/> <span>{details.statistics.likeCount}</span>
                                    <ThumbDownIcon sx={{marginRight: 1, marginLeft: 2}}/> <span>{details.statistics.dislikeCount}</span>
                                </div>
                            </CardInfo>
                        </Card>
                    )
                })}
            </div>
            
            <div>
            
            </div>
        </ContainerVideo>
    )
}

export default VideoPage
