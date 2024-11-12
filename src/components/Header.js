import {React} from 'react'
import logo from '../images/logo.png'

function Header() {
    return(
        <nav className='navbar'>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <div className='navbar-center'>
                <ul className='navbar-links'>
                    <li>
                        <a href='/home'>Главная</a>
                    </li>
                    <li>
                        <a href='/news'>Новости</a>
                    </li>
                    <li>
                        <a href='/about'>О нас</a>
                    </li>
                    <li>
                        <a href='/count_calories'>Посчитать калории</a>
                    </li>
                </ul>
                <div className="login">
                    <a href='/login'>Войти</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
