import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item as={Link} className='btn btn-primary' to="/">Atributos e Perícias</Nav.Item>
                    <Nav.Item as={Link} className='btn btn-primary' to="/atributos">Histórico e Descrição</Nav.Item>
                    <Nav.Item as={Link} className='btn btn-primary' to="/atributos">Talentos</Nav.Item>
                    <Nav.Item as={Link} className='btn btn-primary' to="/atributos">Itens</Nav.Item>
                    <Nav.Item as={Link} className='btn btn-primary' to="/atributos">Magias</Nav.Item>
                </Nav>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Menu;