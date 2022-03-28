import styles from './Header.module.css';
import Vector from '../../src/Vector.svg'

const Header = () => {
    return ( 
        <div>
            <div className={styles.header_start}>
            <img className={styles.header_img} onClick={()=>{window.history.back()}} src={Vector} alt='logo'/>
       </div>
        </div>
     );
}
 
export default Header;