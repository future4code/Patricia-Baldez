
import styles from './Button.module.css'

const Button = ({genres}) => {
    return ( 
        <div className={styles.button} >
            {genres.map((genre) => <button key={genre.id}>{genre.name}</button> )}
        </div>
     );
}
 
export default Button;