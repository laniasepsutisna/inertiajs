//import React
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//import layout
import Layout from '../../Layouts/Default.jsx';
import Card from "react-bootstrap/Card";
import {Col, Container, Row} from "react-bootstrap";

export default function CreateEbook({ebooks, session}) {

    return (
        <Layout>
            <Row>
                <Col md={12}>
                    <Card className="mt-5">
                        <Card.Header>TAMBAH EBOOK</Card.Header>
                        <Card.Body>
                            <Form >
                                <Row className="justify-content-md-first">
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formTitle">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Title Ebook"/>
                                        </Form.Group>

                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formAuthor">
                                            <Form.Label>Author</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Author"/>
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formPublisher">
                                            <Form.Label>Publisher</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Publisher"/>
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formYear">
                                            <Form.Label>Year</Form.Label>
                                            <Form.Select aria-label="Default select year">
                                                <option>Select Year</option>
                                                <option value="2023">2023</option>
                                                <option value="2022">2022</option>
                                                <option value="2021">2021</option>
                                                <option value="2020">2020</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formIsbn">
                                            <Form.Label>ISBN</Form.Label>
                                            <Form.Control type="text" placeholder="Enter ISBN"/>
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formPages">
                                            <Form.Label>Pages</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Pages"/>
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formLanguage">
                                            <Form.Label>Language</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Language"/>
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formSize">
                                            <Form.Label>Size</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Size"/>
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Button variant="primary" type="submit">
                                            Create
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Layout>
    )

}
