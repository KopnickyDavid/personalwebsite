import {React,useEffect,useState} from "react";
import InitiatFirebase1 from  '../../components/firebase/firebase.jsx';
import './articlepage.css';
function ArticlesPage () {
    const [articleData, setArticleData] = useState([]); 
    useEffect(() => {
        async function fetchArticles() {
          const dataa = await InitiatFirebase1();
          setArticleData(dataa); 
        }
    
        fetchArticles();
      }, []); 
    
      
    return (
        <div className="article-container" id="blog">
            <h1>Articles</h1>
            <div className="articles">
            {articleData.map((data, index) => (
                <div className='article' key={index}>
                    <span className='article-title'> 
                        {data.Title} 
                    </span> 
                    <span className='article-content'>
                        {data.Description}
                    </span>
                </div>
            ))}
            </div>

        </div>
    );
}
export default ArticlesPage;