import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state={
            isNavOpen:false,
        }
    }
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
    render() {
        return (
            <Navbar dark expand="md">
                <div className="header">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home' onClick={this.toggleNav}><FontAwesomeIcon icon="home"/> 主頁</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/bmi' onClick={this.toggleNav}><FontAwesomeIcon icon="user-md" /> BMI計算器</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/length' onClick={this.toggleNav}><FontAwesomeIcon icon="ruler"/> 長度轉換器</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/weight' onClick={this.toggleNav}><FontAwesomeIcon icon="weight"/> 重量轉換器</NavLink>
                            </NavItem>
                        </Nav>
                        
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}
export default Header;