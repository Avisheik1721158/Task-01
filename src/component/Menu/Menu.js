import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return (
        <div>
            <>




                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Yamak.ai</Navbar.Brand>
                        <Nav className="me-left">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Marketing</Nav.Link>
                            <Nav.Link href="#pricing">Social Media</Nav.Link>
                            <Nav.Link href="#pricing">Sales Copy</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                            <Nav.Link href="#pricing">Others</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>

        </div>
    );
};

export default Menu;