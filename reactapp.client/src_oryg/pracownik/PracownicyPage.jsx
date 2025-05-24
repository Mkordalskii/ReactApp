import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const initialEmployees = [
    { id: 1, imie: 'Adam', nazwisko: 'Kot', stanowisko: 'Programista', placa: 8000 },
    { id: 2, imie: 'Adam', nazwisko: 'Kowalski', stanowisko: 'Operator', placa: 5000 },
    { id: 3, imie: 'Adam', nazwisko: 'Nowak', stanowisko: 'Programista', placa: 8000 },
    { id: 4, imie: 'Adam', nazwisko: 'Zak', stanowisko: 'Technolog', placa: 10000 },
];

export const Pracownicy = () => {
    const [employees] = useState(initialEmployees);
    const [selectedIds, setSelectedIds] = useState([]);

    const toggleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedIds(employees.map(emp => emp.id));
        } else {
            setSelectedIds([]);
        }
    };

    const toggleSelectRow = (id) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleDelete = () => {
        alert(`Usuwanie pracowników: ${selectedIds.join(", ")}`);
    };

    const handleEdit = () => {
        alert(`Edycja pracownika: ${selectedIds.join(", ")}`);
    };

    return (
        <Container fluid>
            <Accordion defaultActiveKey="0" className="mb-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col xs={12} md={3}>
                                    <Form.Group>
                                        <Form.Label>Szukaj po nazwisku</Form.Label>
                                        <Form.Control type="text" size="sm" />
                                    </Form.Group>
                                </Col>
                                <Col xs={6} md={2}>
                                    <Form.Group>
                                        <Form.Label>Płaca brutto od</Form.Label>
                                        <Form.Control type="text" size="sm" />
                                    </Form.Group>
                                </Col>
                                <Col xs={6} md={2}>
                                    <Form.Group>
                                        <Form.Label>Płaca brutto do</Form.Label>
                                        <Form.Control type="text" size="sm" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={3}>
                                    <Form.Group>
                                        <Form.Label>Stanowisko</Form.Label>
                                        <Form.Select size="sm">
                                            <option>Wybierz</option>
                                            <option value="1">Technolog</option>
                                            <option value="2">Programista</option>
                                            <option value="3">Operator</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={2} className="d-flex align-items-end justify-content-end">
                                    <div className="d-flex w-100">
                                        <Button variant="primary" size="sm" className="me-2 w-100">Szukaj</Button>
                                        <Button variant="danger" size="sm" className="w-100">Anuluj</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            {/* Przyciski akcji */}
            <div className="d-flex justify-content-end mb-3">
                <Button
                    variant="primary"
                    className="me-2"
                    disabled={selectedIds.length !== 1}
                    onClick={handleEdit}
                >
                    Edytuj
                </Button>
                <Button
                    variant="danger"
                    disabled={selectedIds.length === 0}
                    onClick={handleDelete}
                >
                    Usuń
                </Button>
            </div>

            {/* Tabela pracowników */}
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>
                            <Form.Check
                                type="checkbox"
                                onChange={toggleSelectAll}
                                checked={selectedIds.length === employees.length}
                            />
                        </th>
                        <th>ID</th>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Stanowisko</th>
                        <th>Płaca brutto</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>
                                <Form.Check
                                    type="checkbox"
                                    checked={selectedIds.includes(emp.id)}
                                    onChange={() => toggleSelectRow(emp.id)}
                                />
                            </td>
                            <td>{emp.id}</td>
                            <td>{emp.imie}</td>
                            <td>{emp.nazwisko}</td>
                            <td>{emp.stanowisko}</td>
                            <td>{emp.placa}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};
