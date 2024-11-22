import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NewsList from "./NewsList";
import Pagination from "./Pagination";
import firstNewsImg from "../../images/news1.png";
import secondNewsImg from "../../images/news2.png";
import thirdNewsImg from "../../images/news3.png";
import "./newsPage.css"
import Form from "../Form/Form"


function NewsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 3;

    const newsData = [
        {
            id: 1,
            title: "Расписание работы клуба в выходные",
            description: "Дорогие друзья! Режим работы клуба в ближайшие выходные: <br> — 2 ноября (СБ) — клуб в режиме буднего дня: с 8:00: до 22:00. <br> — 4 ноября (ПН) — клуб в режиме выходного дня: с 9:00 до 22:00.",
            date: "28.10.2024",
            image: firstNewsImg
        },
        {
            id: 2,
            title: "Турнир по боксу",
            description: "Турнир проходит для мужчин и женщин в весовых категориях: <br> — до 50 кг, — 55кг, — 60 кг, — 65кг , — 70 кг, — 75 кг, — 80 кг, — 91 кг, — свыше 91 <br> До участия не допускаются профессиональные бойцы по боксу, имеющие разряд выше первого.",
            date: "25.10.2024",
            image: secondNewsImg
        },
        {
            id: 3,
            title: "Приветствуем новичков!",
            description: "Занимаясь в нашем клубе, вы получаете: <br> <ul> <li>Тренажерный зал, оснащенный тренажерами последних разработок</li> <li>Hammer Strength и кардио-линией Life Fitness.</li> <li>Около 20 видов групповых программ для взрослых в залах и зоне единоборств.</li> <li>Бокс, единоборства, функциональные тренировки, йога, танцы, занятия по растяжке</li></ul>",
            date: "21.10.2024",
            image: thirdNewsImg
        },
        {
            id: 4,
            title: "Расписание работы клуба в выходные",
            description: "Дорогие друзья! Режим работы клуба в ближайшие выходные: — 2 ноября (СБ) — клуб в режиме буднего дня: с 8:00: до 22:00.— 4 ноября (ПН) — клуб в режиме выходного дня: с 9:00 до 22:00.",
            date: "15.10.2024",
            image: secondNewsImg
        },
        {
            id: 5,
            title: "Расписание работы клуба в выходные",
            description: "Дорогие друзья! Режим работы клуба в ближайшие выходные: — 2 ноября (СБ) — клуб в режиме буднего дня: с 8:00: до 22:00.— 4 ноября (ПН) — клуб в режиме выходного дня: с 9:00 до 22:00.",
            date: "10.10.2024",
            image: firstNewsImg
        },
    ];

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <div className="news-page">
            <Header/>
            <div className="news-block">
                <div className="news-label">
                    <h1>Новости нашего клуба</h1>
                    <p>Будьте в курсе всех акутальных событий нашего клуба!</p>
                    <p>Следите за акциями, важными событиями и другими новостями!</p>
                </div>
                <NewsList news={currentNews}/>
                <Pagination
                    totalNews={newsData.length}
                    newsPerPage={newsPerPage}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
            <h3>Закажите абонемент прямо сейчас!</h3>
            <Form/>
            <Footer/>
        </div>
    );
}

export default NewsPage;