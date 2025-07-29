import styles from "./Subheading.module.css"

function Subheading(){
    return(
        <div className={styles.wrapper}>
            <h3>Free Shipping on any order over $50!</h3>
        </div>
    )
}

export default Subheading;