import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { logoutAction } from '../../redux/login/actions';
import { useDispatch } from 'react-redux';
import './styles.css'

const AppNavbar = () => {
    const dispatch = useDispatch();

    const handleLogoutClick = _ => {
        localStorage.removeItem('loginData');
        dispatch(logoutAction());
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container className="app-navbar-container">
                <Navbar.Brand href="#home">Geo location</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Button variant="outline-secondary" onClick={handleLogoutClick}>Logout</Button>{' '}
            </Container>
        </Navbar>
    );
};

export default AppNavbar;