import styles from './Collection.module.css';
import { useState, useEffect } from 'react';

export const Collection = () => {
    const importAll = (r) => {
        let images = {};
        r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
        return images;
    };

    const images = importAll(require.context('../../images/collection', false, /\.(jpe?g)$/));

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imagesPerRow, setImagesPerRow] = useState(1); 

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1280) {
                setImagesPerRow(4); 
            } else if (screenWidth >= 768) {
                setImagesPerRow(2); 
            } else {
                setImagesPerRow(1); 
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Object.keys(images).length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + Object.keys(images).length) % Object.keys(images).length);
    };

    return (
        <section className={styles.collection} id='collection'>
            <h2 className={styles.title}>Collection</h2>
            <div className={styles.slider}>
                <div className={styles.wrapper}>
                {Object.keys(images).slice(currentImageIndex, currentImageIndex + imagesPerRow).map((key) => (
                    <div key={key} className={styles.slide}>
                        <img src={images[key]} alt="" className={styles.photo} />
                    </div>
                ))}</div>
                <div className={styles.btnWrapper}>
                    <button type="button" onClick={prevSlide} className={styles.sliderBtn}>Prev</button>
                    <button type="button" onClick={nextSlide} className={styles.sliderBtn}>Next</button>
                </div>
            </div>
        </section>
    );
};
