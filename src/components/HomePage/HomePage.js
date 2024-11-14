import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import backgroundImg1 from "../../images/home_bc_1.png"
import backgroundImg2 from "../../images/home_bc_2.png"
import "./HomePage.css"
import arrowImg from "../../images/arrow.svg"
import bicepsImg from "../../images/biceps.svg"
import saunaImg from "../../images/sauna.svg"
import boxImg from "../../images/box.svg"
import Form from "../Form/Form";

function HomePage() {
    return (
        <div>
            <Header/>
            <div className="first-block">
                <img src={backgroundImg1} className="first-image"/>
                <div className="content-overlay">
                    <h2>Рассчитайте свою норму калорий прямо сейчас!</h2>
                    <a href='/count_calories'>Рассчитать <img src={arrowImg}/></a>
                </div>
            </div>
            <div className="divider-background"/>
            <div className="second-block">
                <img src={backgroundImg2} className="second-image"/>
                <div className="content-overlay">
                    <h2>Читайте новости нашего клуба!</h2>
                    <a href='/news'>Читать <img src={arrowImg}/></a>
                </div>
            </div>
            <div className="features">
                <h2>Особенности нашего клуба:</h2>
                <div className="features-list">
                    <div className="feature">
                        <img src={bicepsImg}/>
                        <h3>Тренерский состав</h3>
                    </div>
                    <div className="feature">
                        <img src={saunaImg} />
                        <h3>Банный комплекс</h3>
                    </div>
                    <div className="feature">
                        <img src={boxImg} />
                        <h3>Групповые тренировки</h3>
                    </div>
                </div>
                <a href="/about">Подробнее в разделе "О нас"<img src={arrowImg} className="btn-img"/></a>
            </div>
            <div className="form">
                <h2>Закажите абонемент прямо сейчас!</h2>
            </div>
            <Form/>
            <Footer/>
        </div>
    );
}

export default HomePage;