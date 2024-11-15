import React from "react";
import Header from "../Header/Header";
import './Login.css'

function LoginPage() {
    return (
        <div>
            <Header/>
            <div className="login-form">
                <h3>Вход в аккаунт</h3>
                <form>
                    <label for="femail">Электронная почта</label>
                    <input type="email" id="femail" name="femail" placeholder="example@mail.com"/>

                    <label for="fpassword">Пароль</label>
                    <input type="password" id="fpass" name="fpass" placeholder="Ваш пароль..."/>

                    <a href="/" className="login-btn">Войти</a>
                    <a href="/signin" className="sigin-btn">Регистрация</a>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;