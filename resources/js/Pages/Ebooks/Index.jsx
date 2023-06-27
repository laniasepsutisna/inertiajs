//import React
import React from 'react';

//import layout
import Layout from '../../Layouts/Default.jsx';
import {Link} from "@inertiajs/inertia-react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function EbookIndex({ ebooks, session }) {

    return (
        <Layout>
            <div style={{ marginTop: '100px' }}>
                <Link href="/ebooks/create" className="btn btn-success btn-md mb-3">TAMBAH EBOOK</Link>

                {session.success && (
                    <div className="alert alert-success border-0 shadow-sm rounded-3">
                        {session.success}
                    </div>
                )}
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </Layout>
    )

}
