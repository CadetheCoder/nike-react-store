import styles from "./Hero.module.css"

function Hero(){
    return(
        <div>
            <div className={styles['img-wrapper']}>
            <img src="./src/assets/hero-img.webp" alt="" className={styles['hero-img']}/>
            </div>
            <div className={styles['text-container']}>
                <h3>Summer Sale</h3>
                <p>Fuel your stride with the latest kicks and exclusive discounts.</p>
                <button>View the Collection</button>
            </div>
        </div>
    )
}

export default Hero;