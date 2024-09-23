import React, { useEffect, useState } from "react";
import { getArticleById } from '../../components/firebase/firebase.jsx';
import './viewarticle.css';
function ViewArticle(props) {
    const [article, setArticle] = useState(null);
    const url = window.location.href;
    const idMatch = url.match(/\/articles\/(\d+)/);
    const id = idMatch ? idMatch[1] : null;

    useEffect(() => {
        async function fetchArticle() {
            if (id) {
                const articleData = await getArticleById(id);
                setArticle(articleData);
            }
        }
        fetchArticle();
    }, [id]);

    return (
        <div className="articles-container">
            <div className="articles-content">
                <h1>{article ? article.Title : "Loading..."}</h1>
                <p>{article ? article.Text : "Loading..."}</p>
            </div>
            <br></br>
        </div>
    );
}

export default ViewArticle;