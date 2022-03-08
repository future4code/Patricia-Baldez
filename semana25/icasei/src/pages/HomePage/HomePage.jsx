import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import CardVideo from '../../components/CardVideo/CardVideo'
import {CardsContainer} from './styled'
import NotFind from '../../components/NotFind/NotFind'
import { getVideos } from '../../services/get'
import { useHistory } from 'react-router'

const HomePage = () => {
    const history = useHistory()
    const [videos, setVideos] = useState([])
    const [searchValue, setSearchvalue] = useState('')
    const [isEmpty, setIsEmpty] = useState(false)

    const onChange = (ev) =>{
        setSearchvalue(ev.target.value)
        console.log(searchValue)
    }

    const onSubmitSearch = (ev) => {
        ev.preventDefault()
        console.log('Voce pesquisou')

        if(searchValue){
            setIsEmpty(false)
            getVideos(searchValue, setVideos)
        }else{
            setIsEmpty(true)
        }
    }

    const onClickVideo = (idVideo) =>{
        history.push(`/video/${idVideo}`)
    }

    const newVideos = videos.items && videos.items.map((video)=>{
        return(
            <CardVideo
                key={video.id.videoId}
                thumbnail={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                channelTitle={video.snippet.channelTitle}
                onClick={()=> onClickVideo(video.id.videoId)}
            />
        )
    })

    console.log(videos)

    return (
        <div>
            <Header/>
            <main>
                <Search
                    onSubmit={onSubmitSearch}
                    value={searchValue}
                    onChange={onChange}
                />
                
                {isEmpty ? <NotFind/>:
                <CardsContainer>
                    {newVideos}
                   <span id='sentinela'>{isEmpty}</span>
                </CardsContainer>}
            </main>
                        
        </div>
    )
}

export default HomePage
