import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Container} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from "react";
import {getArticles} from "../api";
import {Link} from "react-router-dom";
import {DateTime} from "luxon";


export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        getArticles().then((data) => {
            setArticles(data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return (
        <div className='container pt-4 h-100 d-flex align-items-center justify-content-center'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

    return (
        <Container className="mt-5">
            <Row>
                {articles.map((article) => {
                    return (
                        <Col key={article.article_id}
                             className='col-6 col-md-4'>
                            <Card className='d-inline' style={{width: "18rem"}}>
                                <Card.Img variant="top"
                                          src={article.article_img_url}/>
                                <Card.Body className='justify-content-around'>
                                    <small>
                                        {DateTime.fromISO(article.created_at).toLocaleString(DateTime.DATETIME_SHORT)}
                                    </small>
                                    <Card.Title>
                                        {article.title}
                                    </Card.Title>
                                    <div className='card-text'>
                                        <p className='float-end'>Topic: {article.topic}</p>
                                        <p>Votes: {article.votes}</p>
                                        <p className='float-end'>Author: {article.author}</p>
                                        <p>Comments: {article.comment_count}</p>
                                    </div>
                                    <Link to={`/article/${article.article_id}`}>
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
