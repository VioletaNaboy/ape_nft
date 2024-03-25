import styles from './Collection.module.css'
import { useState } from 'react';
export const Collection = () => {
        const importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    };

    const images = importAll(require.context('../../images/collection', false, /\.(jpe?g)$/));
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Object.keys(images).length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + Object.keys(images).length) % Object.keys(images).length);
    };

    return (
        <section className={styles.collection}>
            <h2 className={styles.title}>Collection</h2>
            <div className={styles.slider}>
                <div className={ styles.slide}><img src={images[Object.keys(images)[currentImageIndex]]} alt="" className={ styles.photo} /></div>            
                <div className={styles.btnWrapper}>
                    <button type="button" onClick={prevSlide} className={styles.sliderBtn}>Prev</button>
                    <button type="button" onClick={nextSlide} className={styles.sliderBtn}>Next</button>
                </div>
        </div>
        </section>
    )
}