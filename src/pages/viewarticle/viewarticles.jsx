import React, { useEffect, useState } from "react";
import { getArticleById } from '../../components/firebase/firebase.jsx';

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
            <h1>{article ? article.Title : "Loading..."}</h1>
        </div>
    );
}

export default ViewArticle;