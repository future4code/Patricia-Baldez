import React, { useState, useEffect } from "react"
import { goToDetailsPage } from "../../routes/coordinator"
import { MainContainer } from "./Home.styles"
import { LANGUAGE } from "../../constants/language"
import { BASE_URL } from "../../constants/urls"
import { useHistory } from "react-router"
import MovieCard from "../../components/MovieCard/MovieCard"
import axios from "axios"

const HomePage = () => {
  const [data, setData] = useState([])
  const history = useHistory()

  const onClickCard = (id) => {
    goToDetailsPage(history, id)
  }

  const getMovies = () => {
    axios
      .get(
        `${BASE_URL}/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&${LANGUAGE}&page=1`
      )
      .then((res) => {
        setData(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getMovies()
  }, [])


  const movieCards =
    data &&
    data.map((movie) => {
      return (
        <MovieCard
          cardInfo={movie}
          key={movie.id}
          onClick={() => onClickCard(movie.id)}
        />
      )
    })

  return <MainContainer>
            {movieCards}
        </MainContainer>
}

export default HomePage