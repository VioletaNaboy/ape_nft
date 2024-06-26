import styles from './Hero.module.css'
import img from '../../images/hero/hero.png'
export const Hero = () => {
    return (
    <section className={styles.hero}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.subtitle}>diD yOu seE iT ?</h2>
                <h1 className={styles.title}>YACHT APES</h1>
                <h2 className={styles.subtitle}>Apes aRe eveRywhere</h2>
            </div> 
            <img src={img} alt="A monkey" className={styles.photoHero} />
            <div className={styles.btnWrapper}>
                <h3 className={styles.btn}>MEET APES</h3>
                <p>Yacht Ape is a collection of unique digital apes that you can own in NFT format</p>
            </div>
    </section>
)
    
}