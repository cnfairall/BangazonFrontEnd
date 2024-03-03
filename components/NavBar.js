/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { ShoppingCart } from '@mui/icons-material';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function NavBarAuth() {
  const { user } = useAuth();
  return (
    <Navbar id="navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav id="nav">
            <Link passHref href="/">
              <Navbar.Brand id="logo">BANGAZON</Navbar.Brand>
            </Link>
            <Link passHref href="/categories">
              <Nav.Link>CATEGORIES</Nav.Link>
            </Link>
            <Link passHref href={`/user/${user[0].id}`}>
              <Nav.Link>PROFILE</Nav.Link>
            </Link>
            <Button id="sign-out" onClick={signOut}>SIGN OUT</Button>
            <Link href={`/user/cart/${user[0].id}`} passHref>
              <Button>
                <ShoppingCart />
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
