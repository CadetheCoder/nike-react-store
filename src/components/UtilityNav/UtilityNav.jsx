import styles from './UtilityNav.module.css'

function UtilityNav(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles['text-container']}>
                    <p>Just Do It</p>
                </div>
            </div>
        </div>
    )
}

export default UtilityNav;