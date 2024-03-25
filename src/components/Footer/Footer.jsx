import styles from './Footer.module.css'
import sprite from '../../images/svg/sprite.svg'
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.title}>Are you in?</h2>
            <div className={styles.desc}>
                <svg width="36" height="36">
                    <use fill="#FFFFFF" xlinkHref={`${sprite}#icon-cross`}></use>
                </svg>
                <p>Join the YACHT APE community to be one of the first to receive our limited edition NFT</p>
            </div>
            <form className={styles.form}>
                <div>
                    <label className={styles.formIcon}>
                    <svg width="24" height="24">
                    <use fill="#5A65F2" xlinkHref={`${sprite}#icon-discord`}></use>
                    </svg>
                    </label>
                    <input type="text" placeholder='@username'/>
                </div>
                <div>
                    <label className={styles.formIcon}>
                    <svg width="24" height="24">
                    <use  xlinkHref={`${sprite}#icon-fox`}></use>
                    </svg>
                    </label>
                    <input type="text" placeholder='Wallet address'/>
                </div>
                <button type='submit' className={styles.formBtn}>Mint</button>
            </form>
            <p className={styles.rights}>&copy; Yacht ape 2024 all rights reserved</p>
        </footer>
    )
}