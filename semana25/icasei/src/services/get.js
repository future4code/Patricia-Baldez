import axios from "axios";
import { API_KEY, SEARCH_URL, VIDEO_DETAILS_URL } from "../constants/api";

export const getVideos = (searchValue, setVideos, pageToken = '') => {
    axios.get(`${SEARCH_URL}${API_KEY}&q=${searchValue}&pageToken=${pageToken}`)
    .then((res)=>{
        setVideos(res.data)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

export const getVideoDetails = (videoId, setVideoDetails) =>{
    axios.get(`${VIDEO_DETAILS_URL}id=${videoId}&part=snippet,statistics${API_KEY}`)
    .then((res)=>{
        setVideoDetails(res.data.items)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}