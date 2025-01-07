import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css'; // Optional: Import CSS for styling

const News = () => {
    const [news, setNews] = useState([]); // State to hold news data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error

    useEffect(() => {
        const fetchNews = async () => {
            const options = {
                method: 'GET',
                url: 'https://crypto-news16.p.rapidapi.com/news/yahoo',
                headers: {
                    'x-rapidapi-key': '1bb3dfa6a7msh2211aed496e9ebdp166b9ajsnb3f1b0987076',
                    'x-rapidapi-host': 'crypto-news16.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setNews(response.data); // Set the news data
            } catch (error) {
                setError(error); // Set the error if any
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchNews(); // Call the fetch function
    }, []); // Empty dependency array to run once on mount

    if (loading) return <p>Loading...</p>; // Show loading state
    if (error) return <p>Error fetching news: {error.message}</p>; // Show error state

    return (
        <div className="news-container">
            <h1>Crypto News</h1>
            <ul className="news-list">
                {news.map((item, index) => (
                    <li key={index} className="news-item">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;