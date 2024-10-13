import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        {/* <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand> */}
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <NavLink to="/"><MDBNavbarLink active aria-current='page' href='#'>
                User Form
              </MDBNavbarLink></NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <NavLink to="/adminlogin"><MDBNavbarLink href='#'>AdminLogin</MDBNavbarLink></NavLink>
            
            </MDBNavbarItem>
            <MDBNavbarItem>
              {/* <MDBNavbarLink href='#'>Pricing</MDBNavbarLink> */}
            </MDBNavbarItem>
            {/* <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}