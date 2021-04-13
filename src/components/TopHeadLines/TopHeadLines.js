import React, { useEffect} from 'react';
import { useState } from 'react';
import News from '../News/News';

const TopHeadLines = () => {
    const [articles, setArticles] = useState([]);
    useEffect( ()=>{
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6f96212fc1704577926eb73a3b510f1e';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    } ,[])
    return (
        <div>
            <h1>Top Headlines: {articles.length} </h1>
            {
                articles.map(article => <News article = {article}></News>)
            }
            
        </div>
    );
};

export default TopHeadLines;