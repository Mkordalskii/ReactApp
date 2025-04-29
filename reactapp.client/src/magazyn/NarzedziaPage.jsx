import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const initialTools = [
    { id: 1, nazwa: "Wytaczak D25", kategoria: "Tokarki", pkwiu: "111", cena: 250 },
    { id: 2, nazwa: "Głowica D50", kategoria: "Frezarki", pkwiu: "222", cena: 500 },
    { id: 3, nazwa: "Frez palcowy D8", kategoria: "Frezarki", pkwiu: "333", cena: 150 },
    { id: 4, nazwa: "Nóż zewnętrzny SVBR 2525", kategoria: "Tokarki", pkwiu: "444", cena: 300 },
    { id: 5, nazwa: "Wiertło D8.6 VHM", kategoria: "Wiertła", pkwiu: "555", cena: 100 },
    { id: 6, nazwa: "Wiertło D10 VHM", kategoria: "Wiertła", pkwiu: "666", cena: 100 },
    { id: 7, nazwa: "Gwintownik M6", kategoria: "Gwintowniki", pkwiu: "777", cena: 80 },
    { id: 8, nazwa: "Gwintownik M8", kategoria: "Gwintowniki", pkwiu: "888", cena: 90 },
];

export const Narzedzia = () => {
    const [tools] = useState(initialTools);
    const [selectedIds, setSelectedIds] = useState([]);

    const toggleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedIds(tools.map(tool => tool.id));
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
        alert(`Usuwanie pozycji: ${selectedIds.join(", ")}`);
    };

    const handleEdit = () => {
        alert(`Edycja pozycji: ${selectedIds.join(", ")}`);
    };

    return (
        <Container fluid>
            <Accordion defaultActiveKey="0" className="mb-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtrowanie listy</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="mb-3">
                                <Col xs={12} md={2}>
                                    <Form.Group>
                                        <Form.Label>Kod</Form.Label>
                                        <Form.Control type="number" size="sm" placeholder="0" />
                                    </Form.Group>
                                </Col>

                                <Col xs={12} md={3}>
                                    <Form.Group>
                                        <Form.Label>Szukaj po nazwie</Form.Label>
                                        <Form.Control type="text" size="sm" placeholder="nazwa przedmiotu" />
                                    </Form.Group>
                                </Col>

                                <Col xs={12} md={2}>
                                    <Form.Group>
                                        <Form.Label>Kategoria</Form.Label>
                                        <Form.Select size="sm">
                                            <option>Wybierz</option>
                                            <option value="1">Tokarki</option>
                                            <option value="2">Frezarki</option>
                                            <option value="3">Wiertła</option>
                                            <option value="4">Gwintowniki</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>

                                <Col xs={12} md={2}>
                                    <Form.Group>
                                        <Form.Label>PKWiU</Form.Label>
                                        <Form.Control type="text" size="sm" placeholder="0" />
                                    </Form.Group>
                                </Col>

                                <Col xs={6} md={1}>
                                    <Form.Group>
                                        <Form.Label>Cena od</Form.Label>
                                        <Form.Control type="text" size="sm" placeholder="0" />
                                    </Form.Group>
                                </Col>

                                <Col xs={6} md={1}>
                                    <Form.Group>
                                        <Form.Label>Cena do</Form.Label>
                                        <Form.Control type="text" size="sm" placeholder="9999" />
                                    </Form.Group>
                                </Col>

                                <Col xs={12} md={2} className="d-flex align-items-end justify-content-end">
                                    <div className="d-flex w-100 mt-2">
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
                    onClick={handleEdit} >
                    Edytuj
                </Button>
                <Button
                    variant="danger"
                    disabled={selectedIds.length === 0}
                    onClick={handleDelete} >
                    Usuń
                </Button>
            </div>

            {/* Tabela narzędzi */}
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>
                            <Form.Check
                                type="checkbox"
                                onChange={toggleSelectAll}
                                checked={selectedIds.length === tools.length} />
                        </th>
                        <th>Kod</th>
                        <th>Nazwa</th>
                        <th>Kategoria</th>
                        <th>PKWiU</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    {tools.map(tool => (
                        <tr key={tool.id}>
                            <td>
                                <Form.Check
                                    type="checkbox"
                                    checked={selectedIds.includes(tool.id)}
                                    onChange={() => toggleSelectRow(tool.id)} />
                            </td>
                            <td>{tool.id}</td>
                            <td>{tool.nazwa}</td>
                            <td>{tool.kategoria}</td>
                            <td>{tool.pkwiu}</td>
                            <td>{tool.cena}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};
