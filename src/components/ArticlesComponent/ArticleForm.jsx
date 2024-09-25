// src/components/ArticleForm.jsx
import React, { useState, useEffect } from 'react';
import { createArticle, updateArticle } from '../services/articleService';

const ArticleForm = ({ selectedArticle, onSave, onClear }) => {
    const [article, setArticle] = useState({
        title: '',
        content: '',
        imageUrl: ''
    });

    useEffect(() => {
        if (selectedArticle) {
            setArticle(selectedArticle);
        } else {
            setArticle({ title: '', content: '', imageUrl: '' });
        }
    }, [selectedArticle]);

    const handleChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedArticle) {
            await updateArticle(selectedArticle.articleId, article);
        } else {
            await createArticle(article);
        }
        onSave();
        onClear();
    };

    return (
        <div>
            <h2>{selectedArticle ? 'Edit Article' : 'Create New Article'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={article.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={article.content}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={article.imageUrl}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">{selectedArticle ? 'Update' : 'Create'}</button>
                <button type="button" onClick={onClear}>Clear</button>
            </form>
        </div>
    );
};

export default ArticleForm;
