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
                    
                    <div className="remember-me">
                        <input type="checkbox" value="lsRememberMe" id="rememberMe"/> <label for="rememberMe">Запомнить меня</label>
                    </div>


                    <a href="/" className="login-btn">Войти</a>
                    <a href="/signin" className="signin-btn">Регистрация</a>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;