import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const initialOrders = [
    { id: 1, data: '2024-05-01', kwota: 950, termin: '2024-05-15', narzedzia: 'Noże tokarskie zewnętrzne 1, Noże tokarskie zewnętrzne 2, Wiertło uniwersalne 1', zamawiajacy: 'Adam Kot' },
    { id: 2, data: '2024-05-03', kwota: 1380, termin: '2024-05-18', narzedzia: 'Głowica frezarska 1, Wytaczadło 1, Płytka frezarska 1', zamawiajacy: 'Anna Kowalska' },
    { id: 3, data: '2024-05-05', kwota: 480, termin: '2024-05-20', narzedzia: 'Kamień szlifierski 1, Kamień szlifierski 2', zamawiajacy: 'Piotr Nowak' },
    { id: 4, data: '2024-05-07', kwota: 610, termin: '2024-05-22', narzedzia: 'Nóż tokarski wewnętrzny 1, Płytka tokarska 1', zamawiajacy: 'Katarzyna Zak' },
];

export const Zamowienia = () => {
    const [searchNazwisko, setSearchNazwisko] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [selectedIds, setSelectedIds] = useState([]);

    const filteredOrders = initialOrders.filter(order => {
        const nazwiskoMatch = order.zamawiajacy.toLowerCase().includes(searchNazwisko.toLowerCase());
        const dateFromMatch = dateFrom ? new Date(order.data) >= new Date(dateFrom) : true;
        const dateToMatch = dateTo ? new Date(order.data) <= new Date(dateTo) : true;
        return nazwiskoMatch && dateFromMatch && dateToMatch;
    });

    const toggleSelectRow = (id) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const toggleSelectAll = () => {
        if (selectedIds.length === filteredOrders.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(filteredOrders.map(order => order.id));
        }
    };

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
                                        <Form.Control type="text" value={searchNazwisko} onChange={e => setSearchNazwisko(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Data zamówienia od</Form.Label>
                                        <Form.Control type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Data zamówienia do</Form.Label>
                                        <Form.Control type="date" value={dateTo} onChange={e => setDateTo(e.target.value)} />
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
                        <th>
                            <Form.Check
                                type="checkbox"
                                onChange={toggleSelectAll}
                                checked={selectedIds.length === filteredOrders.length && filteredOrders.length > 0}
                            />
                        </th>
                        <th>Data zamówienia</th>
                        <th>Kwota zamówienia</th>
                        <th>Szacowany termin dostawy</th>
                        <th>Narzędzia</th>
                        <th>Imię i nazwisko</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map(order => (
                        <tr key={order.id}>
                            <td>
                                <Form.Check
                                    type="checkbox"
                                    checked={selectedIds.includes(order.id)}
                                    onChange={() => toggleSelectRow(order.id)}
                                />
                            </td>
                            <td>{order.data}</td>
                            <td>{order.kwota} PLN</td>
                            <td>{order.termin}</td>
                            <td>{order.narzedzia}</td>
                            <td>{order.zamawiajacy}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
