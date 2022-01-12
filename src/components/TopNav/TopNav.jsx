import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import styles from './top_nav.module.scss'

const TopNav = () => {
    return (
        <Navbar className={styles.topnav} sticky='top' bg="dark" variant="dark">
            <Navbar.Brand href="/">React Template</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/protected">Protected</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default TopNav
