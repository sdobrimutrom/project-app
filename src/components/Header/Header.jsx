import {React} from 'react'
import './header.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

function Header() {
    return(
        <>
            <header className='navbar'>
                <img className='logo' src={logo}/>
                <div className='navbar-center'>
                    <nav className='navbar-links'>
                        <NavLink exact to = "/" activeClassName = "active">Главная</NavLink>
                        <NavLink exact to = "/news" activeClassName = "active">Новости</NavLink>
                        <NavLink exact to = "/about" activeClassName = "active">О нас</NavLink>
                        <NavLink exact to = "/count_calories" activeClassName = "active">Посчитать калории</NavLink>
                    </nav>
                    <a href='/login' className='login'>Войти</a>
                </div>
            </header>
            <hr/>
        </>
    );
}

export default Header;
