//import React
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//import layout
import Layout from '../../Layouts/Default.jsx';
import Card from "react-bootstrap/Card";
import {Col, Container, Row} from "react-bootstrap";
import {useForm} from "@inertiajs/inertia-react";

export default function CreateEbook({ebooks, session}) {

    const {data, setData, post, processing, errors} = useForm({
        title: '',
        author: '',
        publisher: '',
        year: '',
        isbn: '',
        pages: '',
        language: '',
        size: '',
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/ebooks')
    }

    return (
        <Layout>
            <Row>
                <Col md={12}>
                    <Card className="mt-5">
                        <Card.Header>TAMBAH EBOOK</Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Row className="justify-content-md-first">
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formTitle">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text" value={data.title}
                                                          onChange={e => setData('title', e.target.value)}
                                                          placeholder="Enter Title Ebook"/>
                                            {errors.title && <p className="text-danger">{errors.title}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formAuthor">
                                            <Form.Label>Author</Form.Label>
                                            <Form.Control type="text" value={data.author}
                                                          onChange={e => setData('author', e.target.value)}
                                                          placeholder="Enter Author"/>
                                            {errors.author && <p className="text-danger">{errors.author}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formPublisher">
                                            <Form.Label>Publisher</Form.Label>
                                            <Form.Control type="text" value={data.publisher}
                                                          onChange={e => setData('publisher', e.target.value)}
                                                          placeholder="Enter Publisher"/>
                                            {errors.publisher && <p className="text-danger">{errors.publisher}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formYear">
                                            <Form.Label>Year</Form.Label>
                                            <Form.Select value={data.year}
                                                         onChange={e => setData('year', e.target.value)}>
                                                <option>Select Year</option>
                                                <option value="2023">2023</option>
                                                <option value="2022">2022</option>
                                                <option value="2021">2021</option>
                                                <option value="2020">2020</option>
                                            </Form.Select>
                                            {errors.year && <p className="text-danger">{errors.year}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formIsbn">
                                            <Form.Label>ISBN</Form.Label>
                                            <Form.Control type="text" value={data.isbn}
                                                          onChange={e => setData('isbn', e.target.value)}
                                                          placeholder="Enter ISBN"/>
                                            {errors.isbn && <p className="text-danger">{errors.isbn}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formPages">
                                            <Form.Label>Pages</Form.Label>
                                            <Form.Control type="text" value={data.pages}
                                                          onChange={e => setData('pages', e.target.value)}
                                                          placeholder="Enter Pages"/>
                                            {errors.pages && <p className="text-danger">{errors.pages}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formLanguage">
                                            <Form.Label>Language</Form.Label>
                                            <Form.Control type="text" value={data.language}
                                                          onChange={e => setData('language', e.target.value)}
                                                          placeholder="Enter Language"/>
                                            {errors.language && <p className="text-danger">{errors.language}</p>}
                                        </Form.Group>
                                    </Col>
                                    <Col xs lg="6">
                                        <Form.Group className="mb-3" controlId="formSize">
                                            <Form.Label>Size</Form.Label>
                                            <Form.Control type="text" value={data.size}
                                                          onChange={e => setData('size', e.target.value)}
                                                          placeholder="Enter Size"/>
                                            {errors.size && <p className="text-danger">{errors.size}</p>}
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
