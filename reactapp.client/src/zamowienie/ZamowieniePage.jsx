import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const allTools = [
    { id: 1, nazwa: "Nóż tokarski zewnętrzny 1", kategoria: "Tokarka", rodzaj: "Noże tokarskie zewnętrzne", cena: 250 },
    { id: 2, nazwa: "Nóż tokarski zewnętrzny 2", kategoria: "Tokarka", rodzaj: "Noże tokarskie zewnętrzne", cena: 255 },
    { id: 3, nazwa: "Nóż tokarski zewnętrzny 3", kategoria: "Tokarka", rodzaj: "Noże tokarskie zewnętrzne", cena: 260 },
    { id: 4, nazwa: "Nóż tokarski wewnętrzny 1", kategoria: "Tokarka", rodzaj: "Noże tokarskie wewnętrzne", cena: 265 },
    { id: 5, nazwa: "Nóż tokarski wewnętrzny 2", kategoria: "Tokarka", rodzaj: "Noże tokarskie wewnętrzne", cena: 270 },
    { id: 6, nazwa: "Nóż tokarski wewnętrzny 3", kategoria: "Tokarka", rodzaj: "Noże tokarskie wewnętrzne", cena: 275 },
    { id: 7, nazwa: "Płytka tokarska 1", kategoria: "Tokarka", rodzaj: "Płytki skrawalnicze", cena: 280 },
    { id: 8, nazwa: "Płytka tokarska 2", kategoria: "Tokarka", rodzaj: "Płytki skrawalnicze", cena: 285 },
    { id: 9, nazwa: "Płytka tokarska 3", kategoria: "Tokarka", rodzaj: "Płytki skrawalnicze", cena: 290 },
    { id: 10, nazwa: "Głowica frezarska 1", kategoria: "Frezarka", rodzaj: "Głowice frezarskie", cena: 350 },
    { id: 11, nazwa: "Głowica frezarska 2", kategoria: "Frezarka", rodzaj: "Głowice frezarskie", cena: 355 },
    { id: 12, nazwa: "Głowica frezarska 3", kategoria: "Frezarka", rodzaj: "Głowice frezarskie", cena: 360 },
    { id: 13, nazwa: "Wytaczadło 1", kategoria: "Frezarka", rodzaj: "Wytaczadła", cena: 365 },
    { id: 14, nazwa: "Wytaczadło 2", kategoria: "Frezarka", rodzaj: "Wytaczadła", cena: 370 },
    { id: 15, nazwa: "Wytaczadło 3", kategoria: "Frezarka", rodzaj: "Wytaczadła", cena: 375 },
    { id: 16, nazwa: "Płytka frezarska 1", kategoria: "Frezarka", rodzaj: "Płytki skrawalnicze", cena: 380 },
    { id: 17, nazwa: "Płytka frezarska 2", kategoria: "Frezarka", rodzaj: "Płytki skrawalnicze", cena: 385 },
    { id: 18, nazwa: "Płytka frezarska 3", kategoria: "Frezarka", rodzaj: "Płytki skrawalnicze", cena: 390 },
    { id: 19, nazwa: "Kamień szlifierski 1", kategoria: "Szlifierka", rodzaj: "Kamienie szlifierskie", cena: 150 },
    { id: 20, nazwa: "Kamień szlifierski 2", kategoria: "Szlifierka", rodzaj: "Kamienie szlifierskie", cena: 155 },
    { id: 21, nazwa: "Kamień szlifierski 3", kategoria: "Szlifierka", rodzaj: "Kamienie szlifierskie", cena: 160 },
    { id: 22, nazwa: "Wiertło uniwersalne 1", kategoria: "Wiertło", rodzaj: "Wiertła", cena: 100 },
    { id: 23, nazwa: "Wiertło uniwersalne 2", kategoria: "Wiertło", rodzaj: "Wiertła", cena: 105 },
    { id: 24, nazwa: "Wiertło uniwersalne 3", kategoria: "Wiertło", rodzaj: "Wiertła", cena: 110 },
];

export const Zamowienie = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedIds, setSelectedIds] = useState([]);

    const categoryTypes = {
        Tokarka: ["Noże tokarskie zewnętrzne", "Noże tokarskie wewnętrzne", "Wiertła", "Płytki skrawalnicze"],
        Frezarka: ["Głowice frezarskie", "Wytaczadła", "Płytki skrawalnicze", "Wiertła"],
        Szlifierka: ["Kamienie szlifierskie"]
    };

    const filteredTools = allTools.filter(tool => {
        if (selectedCategory === "Tokarka" || selectedCategory === "Frezarka") {
            if (tool.kategoria === selectedCategory || tool.kategoria === "Wiertło") {
                return selectedType ? tool.rodzaj === selectedType : true;
            }
        } else {
            if (tool.kategoria === selectedCategory) {
                return selectedType ? tool.rodzaj === selectedType : true;
            }
        }
        return false;
    });

    const toggleSelectRow = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const toggleSelectAll = () => {
        if (selectedIds.length === filteredTools.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(filteredTools.map(tool => tool.id));
        }
    };

    return (
        <Container fluid>
            <Form>
                <Row>
                    <Col>
                        <Button variant="primary" className="me-2">Dodaj</Button>
                        <Button variant="danger" className="me-2">Anuluj</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Tabs defaultActiveKey="danePodstawowe" className="mb-3">
                        <Tab eventKey="wyborNarzedzi" title="Wybór narzędzi">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Producent</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="Sandvik">Sandvik</option>
                                            <option value="Iscar">Iscar</option>
                                            <option value="ZCC-CT">ZCC-CT</option>
                                            <option value="Pafana">Pafana</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Przeznaczenie narzędzia</Form.Label>
                                        <Form.Select value={selectedCategory} onChange={e => {
                                            setSelectedCategory(e.target.value);
                                            setSelectedType('');
                                        }}>
                                            <option value="">Wybierz</option>
                                            <option value="Tokarka">Tokarka</option>
                                            <option value="Frezarka">Frezarka</option>
                                            <option value="Szlifierka">Szlifierka</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                {selectedCategory && (
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Rodzaj narzędzia</Form.Label>
                                            <Form.Select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
                                                <option value="">Wybierz</option>
                                                {categoryTypes[selectedCategory]?.map(type => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                )}
                            </Row>

                            {selectedCategory && (
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th>
                                                <Form.Check
                                                    type="checkbox"
                                                    onChange={toggleSelectAll}
                                                    checked={selectedIds.length === filteredTools.length && filteredTools.length > 0}
                                                />
                                            </th>
                                            <th>Kod</th>
                                            <th>Nazwa</th>
                                            <th>Kategoria</th>
                                            <th>Rodzaj</th>
                                            <th>Cena</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredTools.map(tool => (
                                            <tr key={tool.id}>
                                                <td>
                                                    <Form.Check
                                                        type="checkbox"
                                                        checked={selectedIds.includes(tool.id)}
                                                        onChange={() => toggleSelectRow(tool.id)}
                                                    />
                                                </td>
                                                <td>{tool.id}</td>
                                                <td>{tool.nazwa}</td>
                                                <td>{tool.kategoria}</td>
                                                <td>{tool.rodzaj}</td>
                                                <td>{tool.cena} PLN</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </Tab>

                        <Tab eventKey="danePodstawowe" title="Podstawowe dane">
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Imię</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Nazwisko</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Nazwa działu</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Adres e-mail</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Telefon</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>

                        <Tab eventKey="uwagi" title="Uwagi">
                            <Row className="mb-3">
                                <Col className="col-8">
                                    <Form.Group>
                                        <Form.Label>Dodatkowe informacje</Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Row>
            </Form>
        </Container>
    );
};