import React from "react";
import "./newsItemStyle.css"

const NewsItem = ({news}) => {
    return (
        <div className="news-item">
            <img src={news.image} alt={news.title}/>
            <div className="news-content">
                <h2>{news.title}</h2>
                <div className="news-description" dangerouslySetInnerHTML={{__html: news.description}}/>
                
            </div>
            <p>{news.date}</p>
        </div>
    );
};

export default NewsItem;