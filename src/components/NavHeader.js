// eslint-disable-next-line
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';

import { colors } from '../utils/colors'


class NavHeader extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div id="navBar" class="Navbar" style={navbarContainer}>
          <Navbar style={navbar} expand='sm' dark>
            <NavbarBrand>
              <Link className='active' to='/'>
                <strong>D4D</strong> Gun Control Grades
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink>
                    <Link className='active' to='/About'>
                      About
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link className='active' to='/Contact'>
                      Contact
                    </Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
  

const navbar = {
  backgroundColor: colors.primaryDark,
  maxWidth: 1100,
  margin: 'auto',
  paddingLeft: '24px ',
  paddingRight: '24px ,'

}

const navbarContainer = {
  backgroundColor: colors.primaryDark
}

  export default NavHeader;