import React from "react";
import './Footer.css'
import logo from '../../images/logo.png'

function Footer() {
    return (
        <body className="footer">
            <img className="footer-logo" src={logo}/>
            <div className="footer-links">
                <a href="/news">Новости</a>
                <a href="/about">О нас</a>
                <a href="/count_calories">Посчитать калории</a>
            </div>
            <div className="footer-address">
                <p>Екатеринбург</p>
                <ul>
                    <li>Д. Сибирского тракта, 2, ТРЦ "КомсоМОЛЛ"</li>
                    <li>Родонитовая, 29</li>
                </ul>
            </div>
        </body>
    );
}

export default Footer;