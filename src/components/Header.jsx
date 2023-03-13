import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

export default function Header() {
    return (
        <>
            <Row>
                <Col>
                    <div className="m-4 text-center">
                        <h1 className=" d-inline display-4 fw-bold">NC-NEWS</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Nav justify defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/articles/coding">Coding</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/articles/cooking">Cooking</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/articles/football">Football</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </>
    );
}
