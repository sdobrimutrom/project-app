import React from "react";

const NewsItem = ({news}) => {
    return (
        <div>
            <h2>{news.title}</h2>
            <img src={news.image} alt={news.title}/>
            <p>{news.description}</p>
            <p>{news.date}</p>
        </div>
    );
};

export default NewsItem;