import React from 'react';
import {
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import Link from '@mui/material/Link';

const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
          
        <NavMenu>
          <Link href="/" underline="none">
            <div>
              <h3>PKP</h3>
            </div>
          </Link>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;