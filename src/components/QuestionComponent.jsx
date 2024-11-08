import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Badge, Button } from "react-bootstrap";
import { isCorrectAnswer } from "../utils/isCorrectAnswer";

export default function QuestionComponent() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getRandomQuestion = async () => {
            try {
                const res = await axios.get("/api/questions", {
                    headers: {
                        'Accept': "application/json"
                    }
                });
                setQuestions(res.data.result.map(q => ({ ...q, showTags: false })));
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        }

        getRandomQuestion();
    }, []);

    const toggleTags = (index, event) => {
        event.stopPropagation();
        setQuestions(prevQuestions => 
            prevQuestions.map((q, i) => 
                i === index ? { ...q, showTags: !q.showTags } : q
            )
        );
    };

    return (
        <Container className="py-5" style={{ marginTop: '100px', marginBottom: '20px' }}>
            <Row xs={1} md={2} lg={3} className="g-4">
                {questions.map((question, i) => (
                    <Col key={i}>
                        <Card 
                            className={`shadow-sm ${question.showTags ? 'expanded' : ''}`}
                            onClick={() => window.open(question.url, '_blank')}
                            style={{ 
                                cursor: 'pointer',
                                transition: 'all 0.3s ease-in-out',
                                height: question.showTags ? 'auto' : '100%',
                                minHeight: '200px',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="mb-3">{question.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">BOJ - {question.number}번</Card.Subtitle>
                                <Badge bg="primary" className="align-self-start mb-2">{question.level}</Badge>
                                <div className="mt-auto">
                                    <Button 
                                        variant="outline-secondary" 
                                        size="sm" 
                                        className="mb-2"
                                        onClick={(e) => toggleTags(i, e)}
                                    >
                                        알고리즘 분류
                                    </Button>
                                    <div className={`tag-container ${question.showTags ? 'show' : ''}`}>
                                        {question.tags.map((tag, index) => (
                                            <Badge 
                                                key={index} 
                                                bg="secondary" 
                                                className="me-1 mb-1"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <style jsx>{`
                .tag-container {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease-in-out;
                }
                .tag-container.show {
                    max-height: 500px; // Adjust this value as needed
                }
                .card.expanded {
                    height: auto !important;
                }
            `}</style>
        </Container>
    );
}