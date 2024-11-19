import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Registration.css"

function RegistrationPage() {
    return (
        <div>
            <Header/>
            <div className="registration-form">
                <h3>Регистрация аккаунта</h3>

                <form>
                    <label for="femail">Электронная почта</label>
                    <input type="email" id="femail" name="femail" placeholder="example@mail.com" required/>

                    <label for="ftel">Номер телефона</label>
                    <input type="tel" id="ftel" name="ftel" placeholder="+7 (900) 123 21-22" required/>

                    <label for="ffname">Ваше Имя</label>
                    <input type="text" id="ffname" name="ffname" placeholder="Иван" required/>

                    <label for="fsname">Ваша Фамилия</label>
                    <input type="text" id="fsname" name="fsname" placeholder="Иванов" required/>

                    <label for="fpass">Пароль</label>
                    <input type="password" id="fpass" name="fpass" placeholder="Ваш пароль..." required/>
                    
                    <div className="sex-input">
                        <label for="fsex">Пол:</label>
                        <input type="radio" value="man" id="man-checkbox" name="sex" required/>
                        <label for="man-checkbox">Мужской</label>
                        <input type="radio" value="woman" id="woman-checkbox" name="sex" required/>
                        <label for="woman-checkbox">Женский</label>
                    </div>

                    <a href="/signin" className="registration-btn">Регистрация</a>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default RegistrationPage;