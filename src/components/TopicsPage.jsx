import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Container} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from "react";
import {getArticlesByTopic} from "../api";
import {Link, useParams} from "react-router-dom";


export default function TopicsPage() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState("created_at");
    const [order, setOrder] = useState("desc");
    const {topic} = useParams();

    useEffect(() => {
        getArticlesByTopic(topic, sortBy, order).then((data) => {
            setArticles(data);
            setIsLoading(false);
        });
    }, [topic, sortBy, order]);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleOrderChange = (event) => {
        setOrder(event.target.value);
    };

    if (isLoading) return (
        <div className='container pt-4 h-100 d-flex align-items-center justify-content-center'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

    return (
        <Container className="mt-3">
            <Row>
                <h5 className='mt-2'>Sort By</h5>
                <select className='form-select mt-1 mb-2' value={sortBy} onChange={handleSortChange}>
                    <option value="created_at">Date</option>
                    <option value="author">Author</option>
                    <option value="votes">Votes</option>
                </select>
                <select className='form-select mb-4' value={order} onChange={handleOrderChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
                {articles.map((article) => {
                    return (
                        <Col key={article.article_id}
                             className='col-6 col-md-4'>
                            <Card className='d-inline' style={{width: "18rem"}}>
                                <Card.Img variant="top"
                                          src={article.article_img_url}/>
                                <Card.Body className='justify-content-around'>
                                    <Card.Title>
                                        {article.title}
                                    </Card.Title>
                                    <div className='card-text'>
                                        <p>Topic: {article.topic}</p>
                                        <p>Author:{article.author}</p>
                                    </div>
                                    <Link to={`/articles/${article.article_id}`}>
                                        <Button variant="primary m-1">View Article</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

