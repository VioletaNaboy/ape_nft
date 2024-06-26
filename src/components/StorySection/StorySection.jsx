import styles from './StorySection.module.css'
import sprite from '../../images/svg/sprite.svg'
import img from '../../images/about/img.png'
export const StorySection = () => {
    return (
        <>
        <section className={styles.about} id='about'>
        <h2 className={styles.title}>
            Story that started with 
                {" "}<span style={{ color: "#DC3B5A" }}>one simple ape</span>
        </h2>
        <p className={styles.descFirst}>WHO GOT
                FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW THE IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE YACHT</p>
            <div className={styles.wpapperDesc}>
                <svg width="24" height="24">
                <use fill="#FFFFFF" xlinkHref={`${sprite}#icon-cross`}></use>
                </svg>
                            <p className={styles.descSecond}>
                EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE RANDOMLY GENERATED BY USERS</p>
            </div>
        <img src={img} alt="A monkey" className={styles.photoAbout} />
            <div></div>
        </section>
            <div className={styles.line}>
                <div className={styles.lineText}>
                    <span>Destroy stereotypes</span>
                <svg width="36" height="36">
                <use fill="#FFFFFF" xlinkHref={`${sprite}#icon-cross`}></use>
                </svg>
                <span>HAVE NO LIMITS</span>
                <svg width="36" height="36">
                <use fill="#FFFFFF" xlinkHref={`${sprite}#icon-cross`}></use>
                </svg>
                <span>Break rules</span>
                <svg width="36" height="36">
                <use fill="#FFFFFF" xlinkHref={`${sprite}#icon-cross`}></use>
                </svg>
                </div>              
        </div>
        </>
    )
}