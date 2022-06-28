import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function NavTop() {
    return(
        <div>
            <Navbar style={{marginLeft: '20px'}} bg="light" variant="light">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About Me">About Me</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Button onClick={() => dispatch(clearData())}>Projects</Button>
                    </Nav>
            </Navbar>
        </div>
    )
}

export default NavTop;