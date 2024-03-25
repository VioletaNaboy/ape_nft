import styles from './MindSection.module.css'
import { useState } from 'react';
import sprite from '../../images/svg/sprite.svg'
export const MindSection = ({isMobile}) => {
        const cards = [
        { title: 'YAPE DROP', desc: 'All owners of APE NFTs and all future collections will receive a percentage of sales based on the number of NFTs they own' },
        { title: 'New Collection', desc: 'Launch of the 2nd YACHT Collection Releasing the first version of the Ape Slam Game' },
        { title: 'Token', desc: 'Launch your own token, the proceeds of which will go to a global fund to LAUNCH YACHT CLUB AND PROMOTE it' }
    ]
    const SLIDES = cards.length;
      const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % SLIDES);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + SLIDES) % SLIDES);
    };

    return (
        <section className={styles.minds} id='m-map'>
            <h2 className={styles.title}> MIND map</h2>
            <div className={styles.slider}>
                <div className={styles.slides} style={isMobile ? { transform: `translateX(-${currentSlide * 100}%)` } : {}}>
                    {cards.map((card, i) => <div className={styles.card} key={i}>
                        <p className={styles.cardDesc}>{card.desc}</p>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                    </div>)}
                    {!isMobile && <a href='/' className={styles.card} ><svg className={styles.cardIcon}>
                <use width="24px" height="24px" xlinkHref={`${sprite}#icon-arrow`}></use>
              </svg><span className={styles.cardTitle}>Learn <br/> more<br/> in mind map</span> </a>}
                </div>
             {isMobile && <div className={styles.btnWrapper}>
                    <button type="button" onClick={prevSlide} className={styles.sliderBtn}>Prev</button>
                    <button type="button" onClick={nextSlide} className={styles.sliderBtn}>Next</button>
                </div>}   
        </div>
        </section>
    )
}