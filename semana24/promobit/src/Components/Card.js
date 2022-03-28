import styles from './Card.module.css'
import moment from 'moment';
import { useHistory } from "react-router-dom";

const Card = ({movies}) => {
    let history = useHistory();

    function handleClick(id) {
        history.push(`/details/${id}`);
      }

    return ( 
        <div className={styles.card_container}>
            {movies.map((movie) => (
                <div onClick={() => handleClick(movie.id)}>
                    <ul className={styles.card} >
                        <li>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}` } alt={movie.original_title} />
                        </li>
                        <li className={styles.card_title}>
                            {movie.original_title}
                        </li>
                        <li>
                           {moment(`${movie.release_date}`).format("DD/MM/YYYY")}
                        </li>
                    </ul>
                </div>
            ))}

        </div>
     );
}
 
export default Card;