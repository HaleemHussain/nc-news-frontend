import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchArticleById} from "../api";

export default function Article() {
    const {article_id} = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetchArticleById(article_id).then((data) => {
            setArticle(data);
            setIsLoading(false);
        });
    }, [article_id]);

    if (isLoading) return <h1>Loading...</h1>

    return (
        <>
            <div className='container pt-4'>
                <div className="card mb-3">
                    <img src={article.article_img_url} className="card-img-top" alt="article"/>
                    <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.body}</p>
                        <p className="card-text"><small className="text-muted">By {article.author}</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}