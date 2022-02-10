/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router";
import { LANGUAGE } from '../../constants/language'
import { BASE_URL } from '../../constants/urls'
import { GeneralContainer, InfoContainer, MoviePoster, Overview, MainTitle, OriginalTitle, GenderWrap, DateRunTime, BackButton } from './DetailsPage.styles'
import { goBack } from '../../routes/coordinator';
import Loading from '../../components/Loading/Loading';


const DetailsPage = () => {
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    const history = useHistory()

    function getDetails() {
        setIsLoading(true);
        axios.get(`${BASE_URL}/${params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&${LANGUAGE}`)
            .then((res) => {
                setMovie(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
            });
    }

    useEffect(() => {
        getDetails()
   
    }, [getDetails])

    const revenue = movie && movie.revenue

    const numberDollar = revenue && revenue.toLocaleString("pt-BR", {style: "currency", currency: "USD"})
    
    const movieGenres = movie.genres


    const ConvertedTime = () => {
        const runtime = movie && movie.runtime
        const hours = Math.floor(runtime / 60);          
        const minutes = runtime % 60;

        return `${hours} h ${minutes} min`
    }

    return (
        <GeneralContainer>
            {
                isLoading ? <Loading />
                : 
            <><InfoContainer>
                        <MainTitle>
                            {movie.title}
                        </MainTitle>
                        <OriginalTitle>Título original: {movie.original_title}</OriginalTitle>
                        <DateRunTime>
                            <p>{movie.release_date}</p>
                            <p>{ConvertedTime()}</p>
                        </DateRunTime>

                        <Overview>{movie.overview}</Overview>
                        <p>Avaliação do TMDB: ⭐ <strong>{movie.vote_average}</strong></p>
                        <p>Arrecadação: {numberDollar}</p>
                        <GenderWrap>
                            {movieGenres && movieGenres.map((item) => <p key={item.id}>{item.name}</p>

                            )}
                        </GenderWrap>
                        <BackButton onClick={() => goBack(history)} aria-label="Botão para Voltar" />

                    </InfoContainer>
                    <MoviePoster src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} /></>
            }    
        </GeneralContainer>
    )
}

export default DetailsPage
