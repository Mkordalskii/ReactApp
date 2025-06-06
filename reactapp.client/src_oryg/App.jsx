import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Styczeń', narzedzia: 12 },
    { name: 'Luty', narzedzia: 18 },
    { name: 'Marzec', narzedzia: 10 },
    { name: 'Kwiecień', narzedzia: 22 },
];
function App() {
    return (
        <Container fluid>
            <Row className="mb-4 mt-3 text-center">
                <Col>
                    <h2 className="fw-light text-muted">Witaj w systemie zarządzania narzędziami CNC</h2>
                </Col>
            </Row>
            <Row>
                <Col className="mb-3">
                    <Card>
                        <Card.Header as="h5">Narzędzia</Card.Header>
                        <Card.Body>
                        <Link to="/narzedzia">
                            <Card.Img
                                variant="top"
                                src="/image/narzedzia_cnc.jpg"
                                alt="Narzędzie"
                            />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card>
                        <Card.Header as="h5">Pracownicy</Card.Header>
                        <Card.Body>
                        <Link to="/pracownicy">
                            <Card.Img
                                variant="top"
                                src="/image/pracownicy.jpg"
                                alt="ludzie"
                                />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mb-3">
                    <Card>
                        <Card.Header as="h5">Zamówienia</Card.Header>
                        <Card.Body>
                            <Link to="/zamowienia">
                            <Card.Img
                                variant="top"
                                src="/image/faktury.jpg"
                                alt="segregatory"
                                />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col>
                    <Card bg="light" text="dark" className="text-center">
                        <Card.Body>
                            <Card.Title>🛠️ Narzędzi</Card.Title>
                            <Card.Text className="display-6">154</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="light" text="dark" className="text-center">
                        <Card.Body>
                            <Card.Title>👨‍🔧 Pracowników</Card.Title>
                            <Card.Text className="display-6">27</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card bg="light" text="dark" className="text-center">
                        <Card.Body>
                            <Card.Title>📦 Zamówień</Card.Title>
                            <Card.Text className="display-6">12</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-5">
                <div style={{ width: '100%', height: 400 }}>
                    <h2>Wykres użycia narzędzi</h2>
                    <ResponsiveContainer>
                        <BarChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="narzedzia" name="Narzędzia" fill="#0d6efd" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Row>
        </Container>
    );
}

export default App;
