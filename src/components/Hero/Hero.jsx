import styles from "./Hero.module.css"
import { Link } from "react-router-dom";

function Hero(){
    return(
        <div>
            <div className={styles['img-wrapper']}>
            <img src="/hero-img.webp" alt="" className={styles['hero-img']}/>
            </div>
            <div className={styles['text-container']}>
                <h3>Summer Kicks</h3>
                <p>Own every step with the latest drops and summer-ready designs.</p>
                <Link to="/shoes"><button>View the Kicks</button></Link>
            </div>
        </div>
    )
}

export default Hero;