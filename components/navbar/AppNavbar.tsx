'use client'
import { LanguageCtst } from '../../services/context/LanguageService';
import React from 'react'
import ChangeLanguageComponent from './change-language/ChangeLanguage';
import { appRoutes } from '../../services/appRoutes';
import Image from 'next/image';
import Link from 'next/link';
import {Navbar, Nav} from 'react-bootstrap/';
import Container from 'react-bootstrap/Container';


const AppNavbar = () => {
  const {language } = React.useContext(LanguageCtst);

  return (
    <Navbar 
    className={`app-navbar`}
      sticky="top" 
      bg="dark" 
      variant="dark"  
      expand="md">
      <Container>
        <Navbar.Brand className=''>
          <Link className='link me-3 mt-1' href="/">
            <Image 
              alt='web-logo' 
              src='/web-logo.png'
              width="170"
              height="70"
              className="d-inline-block align-top"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto my-2">

            <Link className='link me-3 mt-1' 
              href={appRoutes.plansScreen}>
                {language.navbar.get_started}
            </Link>

            <Link className='link me-3 mt-1' 
              href={appRoutes.about}>
                {language.navbar.about}
            </Link>

            <ChangeLanguageComponent />

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar