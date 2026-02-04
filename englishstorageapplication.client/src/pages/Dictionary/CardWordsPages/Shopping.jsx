import React, { useState } from 'react';
import './CardWordsPages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToLinkButton from '../../../Components/Buttons/ToLinkButton/ToLinkButton';

function Shopping() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div className="container text-center" onMouseMove={handleMouseMove}>
            <ToLinkButton link={"/topics-page"} placeholder={"Topics"} />
            <section className="section">
                <h2 className="subHeader">Shopping Vocabulary</h2>
                <p className="lead mb-4">Essential words and phrases for shopping in English</p>
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list">
                            <li><strong>Shopping</strong> - шопинг, покупки</li>
                            <li><strong>Store/Shop</strong> - магазин</li>
                            <li><strong>Mall</strong> - торговый центр</li>
                            <li><strong>Department</strong> - отдел</li>
                            <li><strong>Shopping cart</strong> - тележка для покупок</li>
                            <li><strong>Basket</strong> - корзина</li>
                            <li><strong>Cashier</strong> - кассир</li>
                            <li><strong>Checkout</strong> - касса</li>
                            <li><strong>Price</strong> - цена</li>
                            <li><strong>Cost</strong> - стоимость</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list">
                            <li><strong>Sale</strong> - распродажа</li>
                            <li><strong>Discount</strong> - скидка</li>
                            <li><strong>Bargain</strong> - выгодная покупка</li>
                            <li><strong>Receipt</strong> - чек</li>
                            <li><strong>Invoice</strong> - счет</li>
                            <li><strong>Cash</strong> - наличные</li>
                            <li><strong>Credit card</strong> - кредитная карта</li>
                            <li><strong>Debit card</strong> - дебетовая карта</li>
                            <li><strong>Change</strong> - сдача</li>
                            <li><strong>Refund</strong> - возврат денег</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list">
                            <li><strong>Exchange</strong> - обмен</li>
                            <li><strong>Return</strong> - возврат товара</li>
                            <li><strong>Size</strong> - размер</li>
                            <li><strong>Fit</strong> - подходить по размеру</li>
                            <li><strong>Try on</strong> - примерять</li>
                            <li><strong>Fitting room</strong> - примерочная</li>
                            <li><strong>Brand</strong> - бренд, марка</li>
                            <li><strong>Quality</strong> - качество</li>
                            <li><strong>Material</strong> - материал</li>
                            <li><strong>In stock</strong> - в наличии</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list">
                            <li><strong>Out of stock</strong> - нет в наличии</li>
                            <li><strong>Deliver</strong> - доставлять</li>
                            <li><strong>Shipping</strong> - доставка</li>
                            <li><strong>Order</strong> - заказ</li>
                            <li><strong>Online shopping</strong> - онлайн-шопинг</li>
                            <li><strong>Customer</strong> - покупатель</li>
                            <li><strong>Assistant</strong> - продавец-консультант</li>
                            <li><strong>Window shopping</strong> - рассматривание витрин</li>
                            <li><strong>Grocery</strong> - продукты питания</li>
                            <li><strong>Checkout counter</strong> - стойка кассы</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section">
                <h3 className="subHeader">Useful Shopping Phrases</h3>
                <div className="sentences mt-4">
                    <p><strong>How much does this cost?</strong> - Сколько это стоит?</p>
                    <p><strong>Where can I find...?</strong> - Где я могу найти...?</p>
                    <p><strong>Do you have this in size medium?</strong> - У вас есть это в среднем размере?</p>
                    <p><strong>Can I try this on?</strong> - Можно мне это примерить?</p>
                    <p><strong>Where are the fitting rooms?</strong> - Где находятся примерочные?</p>
                    <p><strong>Is this on sale?</strong> - Это со скидкой?</p>
                    <p><strong>Do you offer any discounts?</strong> - Вы предлагаете какие-нибудь скидки?</p>
                    <p><strong>Can I pay by card?</strong> - Я могу оплатить картой?</p>
                    <p><strong>I'd like to return this.</strong> - Я хотел бы вернуть это.</p>
                    <p><strong>Do you have a receipt?</strong> - У вас есть чек?</p>
                    <p><strong>Could you gift-wrap this?</strong> - Не могли бы вы упаковать это в подарочную упаковку?</p>
                    <p><strong>What's your return policy?</strong> - Какова ваша политика возврата?</p>
                    <p><strong>Do you deliver?</strong> - Вы доставляете?</p>
                    <p><strong>How long will delivery take?</strong> - Сколько времени займет доставка?</p>
                    <p><strong>Do you have this in another color?</strong> - У вас есть это в другом цвете?</p>
                </div>
            </section>
            <section className="section">
                <h3 className="subHeader">Types of Shops</h3>
                <div className="row">
                    <div className="col-md-4">
                        <ul className="list">
                            <li><strong>Supermarket</strong> - супермаркет</li>
                            <li><strong>Bakery</strong> - пекарня</li>
                            <li><strong>Butcher's</strong> - мясной магазин</li>
                            <li><strong>Pharmacy</strong> - аптека</li>
                            <li><strong>Bookstore</strong> - книжный магазин</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list">
                            <li><strong>Clothing store</strong> - магазин одежды</li>
                            <li><strong>Shoe store</strong> - обувной магазин</li>
                            <li><strong>Jewelry store</strong> - ювелирный магазин</li>
                            <li><strong>Electronics store</strong> - магазин электроники</li>
                            <li><strong>Hardware store</strong> - магазин хозяйственных товаров</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul className="list">
                            <li><strong>Florist</strong> - цветочный магазин</li>
                            <li><strong>Pet store</strong> - зоомагазин</li>
                            <li><strong>Toy store</strong> - магазин игрушек</li>
                            <li><strong>Convenience store</strong> - магазин "у дома"</li>
                            <li><strong>Gift shop</strong> - магазин подарков</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section">
                <h3 className="subHeader">Shopping Dialogues</h3>
                <div className="dialogue mb-4">
                    <p><strong>Customer:</strong> Excuse me, how much is this shirt?</p>
                    <p><strong>Assistant:</strong> It's $45. It's on sale - 20% off.</p>
                    <p><strong>Customer:</strong> Do you have it in blue?</p>
                    <p><strong>Assistant:</strong> Yes, let me check in the back.</p>
                    <p className="translation">Перевод: Извините, сколько стоит эта рубашка? - $45. Она со скидкой 20%. - У вас она есть в синем цвете? - Да, дайте я проверю на складе.</p>
                </div>
                <div className="dialogue mb-4">
                    <p><strong>Customer:</strong> Can I try these shoes on?</p>
                    <p><strong>Assistant:</strong> Of course, what size are you?</p>
                    <p><strong>Customer:</strong> Size 8, please.</p>
                    <p><strong>Assistant:</strong> Here you are. The fitting rooms are over there.</p>
                    <p className="translation">Перевод: Можно мне примерить эти туфли? - Конечно, какой у вас размер? - Размер 8, пожалуйста. - Вот, пожалуйста. Примерочные там.</p>
                </div>
                <div className="dialogue">
                    <p><strong>Customer:</strong> I'd like to return this jacket.</p>
                    <p><strong>Cashier:</strong> Do you have the receipt?</p>
                    <p><strong>Customer:</strong> Yes, here it is.</p>
                    <p><strong>Cashier:</strong> Would you like a refund or store credit?</p>
                    <p className="translation">Перевод: Я хотел бы вернуть эту куртку. - У вас есть чек? - Да, вот он. - Вы хотите возврат денег или кредит в магазине?</p>
                </div>
            </section>
            <section className="section">
                <h3 className="subHeader">Shopping Verbs</h3>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list">
                            <li><strong>Buy</strong> - покупать</li>
                            <li><strong>Sell</strong> - продавать</li>
                            <li><strong>Pay</strong> - платить</li>
                            <li><strong>Spend</strong> - тратить</li>
                            <li><strong>Save</strong> - экономить</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list">
                            <li><strong>Browse</strong> - просматривать</li>
                            <li><strong>Compare</strong> - сравнивать</li>
                            <li><strong>Choose</strong> - выбирать</li>
                            <li><strong>Purchase</strong> - совершать покупку</li>
                            <li><strong>Afford</strong> - позволить себе</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Shopping;