import styles from './Filter.module.css'

const Filter = ({genres}) => {
    return ( 
        <div className={styles.filter}>
            <h4>FILTRE POR:</h4>
            <div className={styles.button} >
            {genres.map((genre) => <button  key={genre.id}>{genre.name}</button> )}
        </div>
        </div>
     );
}
 
export default Filter;