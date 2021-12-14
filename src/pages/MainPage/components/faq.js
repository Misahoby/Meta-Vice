import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { faqs as faqs_data } from './data.json';

import Photo_01 from '../../../assets/imgs/teams/photo_01.jpg'
import Photo_02 from '../../../assets/imgs/teams/photo_02.jpg'
import Photo_03 from '../../../assets/imgs/teams/photo_03.jpg'

import './faq.scss'

export default function FAQ({ ...props }) {
    const [faqs, setFaqs] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        setFaqs(faqs_data);
        setMembers([
            {
                name: "Constantinople",
                avatar: Photo_01,
                role: "Blockchain Developer"
            },
            {
                name: "Santiago",
                avatar: Photo_02,
                role: "Game Designer & Visuals"
            },
            {
                name: "Stavros",
                avatar: Photo_03,
                role: "Unreal Engine Game Developer"
            },
        ])
    }, [])

    return (
        <div className="text-white faq-page mb-60">
            {/* teams */}
            <h1 className="text-center mb-50">Team</h1>
            {/* <p>lorem</p> */}
            <Row className="members justify-content-center">
                {
                    members.map((m, index) => (
                        <Col key={`member-${index}`}  className="member py-10"  xs="12" sm="6" md="3">
                            <Card className="bg-black align-items-center" >
                                <Card.Img variant="top" src={m.avatar} className="avatar rounded-circle" radioGroup='' />
                                <Card.Body className="text-center"> 
                                    <Card.Title>{m.name}</Card.Title>
                                    <Card.Text className="text-muted">{m.role}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            {/* faqs */}
            <h1 className="text-center my-50">Frequently Asked Questions</h1>
            <div>
                {
                    faqs.map((faq, index) =>
                        <Card key={`faq-${index}`} className="bg-pink p-10 faq mt-20 border-rounded-15">
                            <Card.Body>
                                <Card.Title>{faq.q}</Card.Title>
                                <Card.Text>{faq.a}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </div>
    )
}
