import React from 'react';
import styles from './Menu.module.scss';

const Menu = () => {

    return (
        <section className={styles.menu}>
            <div className={styles.container}>
                 <div className={styles.menu__textWrap}>
                    <h2 className={styles.menu__title}>Book A Table</h2>
                    <hr className={styles.menu__line} />
                    <p className={styles.menu__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</p>
                </div>
                <div className={styles.menu__navWrap}>
                    <ul className={styles.menu__list}>
                        <li className={styles.menu__item}>Soupe</li>
                        <li className={styles.menu__item}>Pizza</li>
                        <li className={styles.menu__item}>Pasta</li>
                        <li className={styles.menu__item}>Desert</li>
                        <li className={styles.menu__item}>Wine</li>
                        <li className={styles.menu__item}>Beer</li>
                        <li className={styles.menu__item}>Drinks</li>
                    </ul>  
                </div>
                <div className={styles.menu__price}>
                    <ul className={styles.menu__priceList}>
                    
                        {/* <li className={styles.menu__priceItem}>{this.props.title.map(PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span>)</li>
                     */}
                        
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                        <li className={styles.menu__priceItem}>PIZZA QUATRO STAGIONI....  55,68 USD<br/><span className={styles.menu__pricePart}>Integer ullamcorper neque eu purus euismod</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Menu;