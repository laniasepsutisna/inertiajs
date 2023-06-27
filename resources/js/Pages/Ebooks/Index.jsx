//import React
import React from 'react';

//import layout
import Layout from '../../Layouts/Default.jsx';
import {Link} from "@inertiajs/inertia-react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col, Row} from "react-bootstrap";
import {Inertia} from "@inertiajs/inertia";
import {format} from "date-fns";
import Swal from "sweetalert2";

export default function EbookIndex({ebooks, session}) {
    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Apakah Anda yakin ingin menghapus pengguna ini?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal',
        });

        if (result.isConfirmed) {
            Inertia.delete(`/ebooks/${id}`);
        }
    };

    return (
        <Layout>
            <div style={{marginTop: '100px'}}>
                <Link href="/ebooks/create" className="btn btn-success btn-md mb-3">TAMBAH EBOOK</Link>

                {session.success && (
                    <div className="alert alert-success border-0 shadow-sm rounded-3">
                        {session.success}
                    </div>
                )}

                <Row>
                    {ebooks.map((ebook, index) => (
                        <Col key={index} md={6} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{ebook.title}</Card.Title>
                                    <Card.Text>
                                        {ebook.publisher}
                                        {ebook.year}
                                        {ebook.isbn}
                                    </Card.Text>
                                    <Link href={`/ebooks/${ebook.id}/edit`} className="btn btn-primary me-2">Edit</Link>
                                    <Button variant="danger" onClick={() => handleDelete(ebook.id)}
                                            className="m-2">Delete</Button>
                                </Card.Body>
                                <Card.Footer>
                                    <p>Created at: {format(new Date(ebook.created_at), 'yyyy-MM-dd')}</p>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Layout>
    )

}
