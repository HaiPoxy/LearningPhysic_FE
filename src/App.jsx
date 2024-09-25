import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import RouteMapper from './routes/RouteMapper.jsx' ;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
            <RouteMapper />
        </Router>
    </>
  )
  const [selectedArticle, setSelectedArticle] = useState(null);

    const handleEdit = (article) => {
        setSelectedArticle(article);
    };

    const handleSave = () => {
        setSelectedArticle(null);
    };

    const handleClear = () => {
        setSelectedArticle(null);
    };

    return (
        <div>
            <h1>Article Management</h1>
            <ArticleForm
                selectedArticle={selectedArticle}
                onSave={handleSave}
                onClear={handleClear}
            />
            <ArticleList onEdit={handleEdit} />
        </div>
    );
}

export default App
