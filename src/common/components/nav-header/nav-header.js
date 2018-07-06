import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
export const NavHeader = () => {
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">My Profile</NavbarBrand>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink id="repositoryLink">Profile / Repositories</NavLink>
            </NavItem>
            </Nav>
        </Navbar>
    )
}
