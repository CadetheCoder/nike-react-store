import styles from './Checkout.module.css'

function Checkout(){
    return(
        <div className={styles.container}>
            <h1>Checkout</h1>
            <form>
                <h3 className={styles['form-title']}>Delivery Options</h3>
                <input type='text' placeholder='Email*'/>
                <div className={styles['input-group']}>
                    <input type='text' placeholder='First Name*' className={styles['first-name']}/>
                    <input type='text' placeholder='Last Name*' className={styles['last-name']}/>
                </div>
                <input type='text' placeholder='Address*'/>
                <div className={styles['input-group']}>
                    <input type="text" placeholder='Address Line 2'/>
                    <input type="text" placeholder='District*'/>
                </div>
                <div className={styles['input-row']}>
                    <input type="text" placeholder='City*'/>
                    <input type="text" placeholder='Prefecture*' />
                    <input type="text" placeholder='Post Code*' />
                </div>
                <input type="text" placeholder='Phone Number*'/>
                <h3 className={styles['form-title']}>Payment</h3>
                <div className={styles['card-container']}>
                    <p>Add Card</p>
                    <div className={styles['card-input-row']}>
                        <input type="text" placeholder='Card Number' className={styles['card-number']}/>
                        <input type="text" placeholder='MM/YY' className={styles['card-date']}/>
                        <input type="text" placeholder='CVV' className={styles['card-cvv']}/>
                    </div>
                </div>
                <div className={styles['button-container']}>
                    <button type='submit' className={styles['submit-button']}>Save & Continue</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout;