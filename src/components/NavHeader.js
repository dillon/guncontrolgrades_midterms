// NavHeader (on all pages)
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { NavHeader as Styles } from '../utils/styles'

// Constants
import { constants } from '../utils/constants'

// Bootstrap
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
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div id='navBar' className='Navbar' style={Styles.navbarContainer}>
        <Navbar style={Styles.navbar} expand='xs' dark>
          <Link className='active' to='/'>
            <NavbarBrand>
              <span style={{
                color: 'white',
                fontSize: '1.6rem',
                letterSpacing: 1.2,
                fontWeight: 600
              }}>
                {constants.nameAbbreviated}
              </span>
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link className='active' to='/About'>
                  <NavLink style={Styles.navLink}>
                    About
                </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link className='active' to='/Contact'>
                  <NavLink style={Styles.navLink}>
                    Contact
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavHeader;