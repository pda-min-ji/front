import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Badge, Button, Spinner } from "react-bootstrap";


export default function Component() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState({});
  const [result, setResult] = useState({});

  useEffect(() => {
    const getRandomQuestion = async () => {
      try {
        const res = await axios.get("/api/questions", {
          headers: {
            'Accept': "application/json"
          }
        });
        setQuestions(res.data.result.map(q => ({ ...q, showTags: false, solved: false, showNumber: false })));
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }
    console.log(questions)

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

  const toggleSolved = (index, event) => {
    event.stopPropagation();
    setQuestions(prevQuestions => 
      prevQuestions.map((q, i) => 
        i === index ? { ...q, solved: !q.solved, showNumber: !q.solved } : q
      )
    );
  };

  const solvedQuestion = async (number, index) => {
    const value = {
      "bojId": sessionStorage.getItem("bojId"),
      "questionNumber": number
    }
    // 로딩 상태 시작
    setLoading((prev) => ({ ...prev, [index]: true }));
    setResult((prev) => ({ ...prev, [index]: null }));

    try {
      const res = await axios.post("/api/questions/correct", value);
      const data = res.data;

      // 요청 성공 후 결과 상태 업데이트
      setResult((prev) => ({ ...prev, [index]: data.result })); 
      console.log(data)
      console.log(questions)
      console.log(result)
    } catch (error) {
      setResult((prev) => ({ ...prev, [index]: false })); 
      console.error("에러 발생:", error);
    } finally {
      setLoading((prev) => ({ ...prev, [index]: false })); // 로딩 상태 종료
    }
  }

  return (
    <Container className="py-5" style={{ marginTop: '100px', marginBottom: '20px' }}>
      <Row xs={1} md={2} lg={3} className="g-4">
        {questions.map((question, i) => (
          <Col key={i}>
            <Card 
              className={`shadow-sm h-100 ${question.showTags ? 'expanded' : ''}`}
              onClick={() => window.open(question.url, '_blank')}
              style={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3">{question.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">BOJ - {question.number}번</Card.Subtitle>
                <Badge bg="primary" className="align-self-start mb-2">{question.level}</Badge>
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-end">
                    <Button 
                      variant="outline-secondary" 
                      size="sm" 
                      className="mb-2"
                      onClick={(e) => toggleTags(i, e)}
                    >
                      알고리즘 분류
                    </Button>
                    <Button
                      variant={question.solved ? "success" : "outline-success"}
                      size="sm"
                      className="mb-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSolved(i, e);
                        solvedQuestion(question.number, i);
                      }}
                      style={{
                        transition: 'all 0.3s ease-in-out'
                      }}
                    >
                      {loading[i] ? (
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                      ) : (
                        <>
                          <i 
                            className={`bi ${
                              result[i] === true 
                                ? 'bi-check-circle-fill text-primary'
                                : result[i] === false 
                                  ? 'bi-x-circle-fill text-danger'
                                  : question.solved ? 'bi-check-circle-fill' : 'bi-check-circle'
                            } me-1`}
                          ></i>
                          {result[i] === true ? "잘했어요~" : "풀었어요!"}
                        </>
                      )}
                    </Button>
                  </div>
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
      <style jsx="true">{`
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