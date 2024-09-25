// src/components/ArticleList.jsx
import React, { useEffect, useState } from 'react';
import { getArticles, deleteArticle } from '../services/articleService';

const ArticleList = ({ onEdit }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        loadArticles();
    }, []);

    const loadArticles = async () => {
        const response = await getArticles();
        setArticles(response.data);
    };

    const handleDelete = async (id) => {
        await deleteArticle(id);
        loadArticles();
    };

    return (
        <div>
            <h2>Article List</h2>
            <ul>
                {articles.map(article => (
                    <li key={article.articleId}>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        <button onClick={() => onEdit(article)}>Edit</button>
                        <button onClick={() => handleDelete(article.articleId)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;
