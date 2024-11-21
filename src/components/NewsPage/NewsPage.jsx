import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NewsList from "./NewsList";
import Pagination from "./Pagination";


function NewsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 3;

    const newsData = [
        {
            id: 1,
            title: "Расписание работы клуба в выходные",
            description: "Дорогие друзья! Режим работы клуба в ближайшие выходные: — 2 ноября (СБ) — клуб в режиме буднего дня: с 8:00: до 22:00.— 4 ноября (ПН) — клуб в режиме выходного дня: с 9:00 до 22:00.",
            date: "28.10.2024",
            image: "../../images/news1"
        },
        {
            id: 2,
            title: "Расписание работы клуба в выходные",
            description: "Дорогие друзья! Режим работы клуба в ближайшие выходные: — 2 ноября (СБ) — клуб в режиме буднего дня: с 8:00: до 22:00.— 4 ноября (ПН) — клуб в режиме выходного дня: с 9:00 до 22:00.",
            date: "28.10.2024",
            image: "../../images/news1"
        },
        {
            id: 3,
            title: "Расписание работы клуба в выходные",
            description: "Дорогие друзья! Режим работы клуба в ближайшие выходные: — 2 ноября (СБ) — клуб в режиме буднего дня: с 8:00: до 22:00.— 4 ноября (ПН) — клуб в режиме выходного дня: с 9:00 до 22:00.",
            date: "28.10.2024",
            image: "../../images/news1"
        },
        {
            id: 4,
            title: "Расписание работы клуба в выходные",
            description: "Дорогие друзья! Режим работы клуба в ближайшие выходные: — 2 ноября (СБ) — клуб в режиме буднего дня: с 8:00: до 22:00.— 4 ноября (ПН) — клуб в режиме выходного дня: с 9:00 до 22:00.",
            date: "28.10.2024",
            image: "../../images/news1"
        },
        {
            id: 5,
            title: "Расписание работы клуба в выходные",
            description: "Дорогие друзья! Режим работы клуба в ближайшие выходные: — 2 ноября (СБ) — клуб в режиме буднего дня: с 8:00: до 22:00.— 4 ноября (ПН) — клуб в режиме выходного дня: с 9:00 до 22:00.",
            date: "28.10.2024",
            image: "../../images/news1"
        },
    ];

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <div>
            <Header/>
            <h1>Новости</h1>
            <NewsList news={currentNews}/>
            <Pagination
                totalNews={newsData.length}
                newsPerPage={newsPerPage}
                paginate={paginate}
                currentPage={currentPage}
            />
            <Footer/>
        </div>
    );
}

export default NewsPage;