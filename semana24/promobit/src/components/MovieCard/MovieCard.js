import React from 'react'
import { CardImage, CardVote, MovieCardContainer } from './MovieCard.styles'
// import cardImage from "../../images/card_image_test.jpg"


const MovieCard = ({cardInfo, onClick}) => {
    
    return (
        <MovieCardContainer onClick={onClick}>
            <CardImage src={`https://image.tmdb.org/t/p/original${cardInfo.poster_path}`} />
            <CardVote>
                {cardInfo.vote_average}
            </CardVote>
        </MovieCardContainer>
    )
}

export default MovieCard
