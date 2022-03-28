import { useState, useEffect } from "react";
import api from "../api";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
import moment from "moment";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const api_key = "7cbb88dd714f84168b91799865f574d3";

const Details = () => {
  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      const movieDetail = await api.get(`/movie/${id}`, {
        params: { api_key, language: "pt-BR" },
      });

      const movieVideos = await api.get(`/movie/${id}/videos`, {
        params: { api_key, language: "pt-BR" },
      });

      const trailer = movieVideos.data.results.find(
        (findTrailer) =>
          findTrailer.official === true && findTrailer.site === "YouTube"
      );

      setMovie(movieDetail.data);
      setTrailer(trailer);
    }

    getMovieDetails();
  }, [id]);

  function getGenres() {
    return movie?.genres?.map((genre) => genre.name).join(", ") || "";
  }


  return (
    <main>
      <header className={styles.header}>
        <div className={styles.avatar_container}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.original_title}
          />
        </div>
        <div className={styles.details_container}>
          <h1>
            {movie.title} ({moment(`${movie.release_date}`).format("YYYY")})
          </h1>
          <p>
            
            {moment(`${movie.release_date}`).format("DD/MM/YYYY")} • (
            {movie?.original_language?.toUpperCase()}) • {getGenres()} •{" "}
            {movie.runtime} minutos
          </p>
          <p>
          { <CircularProgressbar  className={styles.details_icon} value={Number(movie.vote_average)} text={`${movie.vote_average* 10}%`} />}
          Avaliação dos usuários
          </p>
          <h2>Sinopse</h2>
          <p>{movie.overview}</p>
        </div>
      </header>
      <section>
      </section>
      {trailer && (
        <section className={styles.details_trailer}>
          <h1>Trailer</h1>
          <iframe
            title={movie.original_title}
            id="ytplayer"
            type="text/html"
            width="907"
            height="510"
            marginRigth="710"
            src={`http://www.youtube.com/embed/${trailer.key}?autoplay=1`}
            frameborder="0"
          />
        </section>
      )}

      <section></section>
    </main>
  );
};

export default Details;
