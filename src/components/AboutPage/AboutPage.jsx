import React from "react";
import Header from "../Header/Header";
import "./About.css";
import appleImg from "../../images/apple.png";
import waistImg from "../../images/waist.png";
import bicepsImg from "../../images/biceps_heart.png";
import bycicleImg from "../../images/bycicle.png";
import manImg from "../../images/fit_man.png";
import womanImg from "../../images/fit_woman.png";
import Form from "../Form/Form";

function AboutPage() {
    return (
        <div className="about-us">
            <Header/>
            <div className="features-block">
                <div className="feature">
                    <img src={appleImg}/>
                    <p>Внимательно относимся к здоровью наших посетителей</p>
                </div>

                <div className="feature">
                    <img src={waistImg}/>
                    <p>На 100% понятный тренинг для всех</p>
                </div>

                <div className="feature">
                    <img src={bicepsImg}/>
                    <p>Профессионалы в тренерском составе</p>
                </div>

                <div className="feature">
                    <img src={bycicleImg}/>
                    <p>Самое новое и лучшее оборудование</p>
                </div>
            </div>

            <div className="trainings-block">
                <div className="training" id="first">
                    <h2>Йога</h2>
                    <h3>Для здоровья и фигуры</h3>
                </div>

                <div className="training" id="second">
                    <h2>Силовая тренировка</h2>
                    <h3>Станьте сильнее!</h3>
                </div>

                <div className="training" id="third">
                    <h2>Повышение гибкости</h2>
                    <h3>Растяните суставы!</h3>
                </div>

                <div className="training" id="fourth">
                    <h2>Укрепление здоровья</h2>
                    <h3>Пилатес, МФР</h3>
                </div>

                <div className="training" id="fifth">
                    <h2>АКВААЭРОБИКА</h2>
                    <h3>Групповые занятия</h3>
                </div>

                <div className="training" id="sixth">
                    <h2>ФУНКЦИОНАЛЬНЫЕ ТРЕНИРОВКИ</h2>
                </div>
            </div>

            <div className="fit-people">
                <div className="fit">
                    <img src={manImg}/>
                    <h3>Тренируем профессионалов</h3>
                </div>
                <div className="fit">
                    <img src={womanImg}/>
                    <h3>Используем передовое оборудование</h3>
                </div>
            </div>
            <Form/>
        </div>
    );
}

export default AboutPage;