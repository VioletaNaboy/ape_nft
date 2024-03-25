import styles from './FAQSection.module.css'
import { useState } from 'react'
import first from '../../images/faq/1.jpg'
import second from '../../images/faq/2.jpg'
import third from '../../images/faq/3.jpg'
import fourth from '../../images/faq/4.jpg'
export const FAQSection = ({isMobile}) => {

   const [currentCard, setCurrentCard] = useState(null);

 const toggleDescription = (title) => {
        setCurrentCard(title === currentCard ? null : title);
    };

    const cards = [
        { title: 'WHAT IS AN NFT COLLECTION?', desc: 'An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.', img: first },
        { title: 'HOW DO I PURCHASE NFTS FROM A COLLECTION?', desc: 'To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.', img: second },
        { title: 'CAN I SELL OR TRADE NFTS FROM A COLLECTION?', desc: 'Yes, you can sell or trade NFTs from a collection like you would other digital assets.', img: third },
        { title: 'WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?', desc: "As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don't automatically get copyright or intellectual property rights.", img: fourth }
    ]
    return (
        <section className={styles.faq}>
            <h2 className={styles.title}>FAQ</h2>
            <ul className={styles.faqList}>
                {cards.map((card, i) =>
                    <li className={`${styles.card} ${card.title === currentCard ? `${styles.open}` : ''}`} key={i} onClick={() => toggleDescription(card.title)}>
                        {!isMobile && currentCard === card.title && <img alt='A monkey' src={card.img} className={styles.photo}></img>}
                        <div className={styles.titleWrapper}>
                            <span>[{i + 1}]</span>
                            <div><h4>{card.title}</h4>
                            {currentCard === card.title && <p>{card.desc}</p>}</div>   
                        </div>
                        
                    </li>
                )}
            </ul>
        </section>
    )
}