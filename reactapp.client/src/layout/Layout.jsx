import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function Layout() {
    const location = useLocation();

    const isActive = (paths) => paths.some(path => location.pathname.startsWith(path));

    return (
        <div className="app">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand as={NavLink} to="/" className="d-block">
                        <Image src="/image/logo.png" className="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav variant="tabs" className="mx-auto" navbarScroll>
                            <Nav.Item>
                                <Nav.Link
                                    as={NavLink}
                                    to="/"
                                    end
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                >
                                    Start
                                </Nav.Link>
                            </Nav.Item>

                            <NavDropdown
                                title="Magazyn"
                                id="magazyn"
                                className={isActive(['/narzedzia', '/narzedzie']) ? 'active-tab' : ''}
                            >
                                <NavDropdown.Item as={NavLink} to="/narzedzia">
                                    Narzędzia
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/narzedzie">
                                    Dodaj narzędzie
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title="Kadry"
                                id="kadry"
                                className={isActive(['/pracownicy', '/pracownik']) ? 'active-tab' : ''}
                            >
                                <NavDropdown.Item as={NavLink} to="/pracownicy">
                                    Pracownicy
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/pracownik">
                                    Dodaj pracownika
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown
                                title="Zamówienia"
                                id="zamowienia"
                                className={isActive(['/zamowienia']) ? 'active-tab' : ''}
                            >
                                <NavDropdown.Item as={NavLink} to="/zamowienia">
                                    Lista zamówień
                                </NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/zamowienie">
                                    Dodaj zamówienie
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Szukaj"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="primary">Szukaj</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    );
}
