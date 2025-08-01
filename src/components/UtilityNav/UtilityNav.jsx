import styles from './UtilityNav.module.css'

function UtilityNav(){
    return(
        <div className={styles.wrapper}>
            <div className={styles['log-in-container']}>
                <p>Log in</p>
            </div>
        </div>
    )
}

export default UtilityNav;