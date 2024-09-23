import {React,useEffect,useState} from "react";
import {getArticles} from  '../../components/firebase/firebase.jsx';
import './articlepage.css';
import {  Link } from "react-router-dom";

function ArticlesPage () {
    const [articleData, setArticleData] = useState([]); 
    useEffect(() => {
        async function fetchArticles() {
          const dataa = await getArticles();
          setArticleData(dataa); 
        }
    
        fetchArticles();
      }, []); 
    
      
    return (
        <div className="article-container" id="blog">
            <h1>Articles</h1>
            <div className="articles">
            {articleData.map((data, index) => (
                <Link to={"/articles/"+index}>
                <div className='article' key={index}>
                    <h2 className='article-title'> 
                        {data.Title} 
                    </h2>
                    <p className='article-content'>
                        {data.Description}
                    </p>
                </div>
                </Link>
            ))}
            </div>

        </div>
    );
}
export default ArticlesPage;