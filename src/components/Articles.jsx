import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Container} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from "react";
import {fetchArticles} from "../api";
import {Link} from "react-router-dom";


export default function Articles() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetchArticles().then((data) => {
            setArticles(data);
            setIsLoading(false);
        });
    }, []);
    if (isLoading) return <h1>Loading...</h1>
    return (
        <Container className="mt-3">
            <Row>
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
