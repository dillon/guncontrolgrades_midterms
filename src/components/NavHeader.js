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
        <div className='Navbar'>
          <Navbar expand='md' dark>
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
  
  export default NavHeader;