// eslint-disable-next-line
import { Link } from 'react-router-dom';
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

// styles
import { NavHeader as Styles } from '../utils/styles'


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
      <div id='navBar' class='Navbar' style={Styles.navbarContainer}>
        <Navbar style={Styles.navbar} expand='xs' dark>
          <Link className='active' to='/'>
            <NavbarBrand>
              {/* <strong>{constants.nameAbbreviated}</strong> {constants.name} */}
              <img width='50' src={require('../utils/logoWhite.svg')} />
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link className='active' to='/About'>
                  <NavLink>
                    About
                </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link className='active' to='/Contact'>
                  <NavLink>
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