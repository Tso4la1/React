import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.svg';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { ThemeContext } from '.';


const NavbarComponent = () => {
    const stylesNav = {
        marginLeft: '100px'
    }
    const [theme, toggleTheme] = useContext(ThemeContext)
    return (
        <div>
            <Navbar expand="lg" style={{ background: theme.background, color: theme.foreground }}>
                <button className="btn btn-outline-secondary" onClick={toggleTheme}>Toggle Mode</button>
                <Container className='container-fluid' fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand >
                            <Image src={logo} className="navHead" />
                            <p className="darkHeading navHead">Tsola's React</p>
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={stylesNav}>
                            <LinkContainer to="/">
                                <Nav.Link style={{ color: theme.foreground }}><p style={{ color: theme.foreground }}> Home </p></Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/CreatePost">
                                <Nav.Link style={{ color: theme.foreground }}><p style={{ color: theme.foreground }}>Add New Post</p></Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/reducer">
                                <Nav.Link style={{ color: theme.foreground }}><p style={{ color: theme.foreground }}>Tutorials</p></Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/redux">
                                <Nav.Link style={{ color: theme.foreground }}><p style={{ color: theme.foreground }}>ReduxTutorials</p></Nav.Link>
                            </LinkContainer>


                            <NavDropdown title="Dashboard" id="basic-nav-dropdown">

                                <LinkContainer to="/login">
                                    <NavDropdown.Item><p style={{ color: theme.foreground }}>Login</p></NavDropdown.Item>
                                </LinkContainer>

                                <NavDropdown.Divider />

                                <LinkContainer to="/register">
                                    <NavDropdown.Item>
                                        Register
                                    </NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;