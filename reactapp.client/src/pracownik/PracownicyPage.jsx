import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Pracownicy = () => {
    return (
        <Container fluid>
            <Accordion defaultActiveKey="filtrowanie">
                <Accordion.Item eventKey="filtrowanie">
                    <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Szukaj po nazwisku</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Placa brutto od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Placa brutto do</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Stanowisko</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Dyrektor</option>
                                            <option value="2">Kierownik</option>
                                            <option value="3">Sprzedawca</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Stanowisko</th>
                        <th>Placa brutto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Adam</td>
                        <td>Kot</td>
                        <td>Sprzedawca</td>
                        <td>4000</td>
                    </tr>
                    <tr>
                        <td>Adam</td>
                        <td>Kowalski</td>
                        <td>Dyrektor</td>
                        <td>30000</td>
                    </tr>
                    <tr>
                        <td>Adam</td>
                        <td>Nowak</td>
                        <td>Sprzedawca</td>
                        <td>4000</td>
                    </tr>
                    <tr>
                        <td>Adam</td>
                        <td>Zak</td>
                        <td>Kierownik</td>
                        <td>10000</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}