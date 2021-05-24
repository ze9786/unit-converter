import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, 
    UncontrolledDropdown} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        }
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
    
        return (
            <Navbar dark expand="md" fixed="top">
                <div className="container header">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand href="/"> 單位轉換器</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" exact to='/' id="nav-home" onClick={this.toggleNav}><FontAwesomeIcon icon="home" /> 主頁</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/bmi' onClick={this.toggleNav}><FontAwesomeIcon icon="user-md" /> BMI計算器</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/weight' onClick={this.toggleNav}><FontAwesomeIcon icon="weight" /> 重量轉換器</NavLink>
                            </NavItem>
                            
                             <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                容積/面積
                                </DropdownToggle>
                                <DropdownMenu right id="nav-dropdown">
                                <DropdownItem>
                                <NavItem>
                                <NavLink className="nav-link" to='/length' onClick={this.toggleNav}><FontAwesomeIcon icon="ruler" /> 長度轉換器</NavLink>
                                </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                <NavItem>
                                <NavLink className="nav-link" to='/area' onClick={this.toggleNav}><FontAwesomeIcon icon="chart-area" /> 面積轉換器</NavLink>
                            </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                <NavItem>
                                <NavLink className="nav-link" to='/volume' onClick={this.toggleNav}><FontAwesomeIcon icon="mug-hot" /> 容量轉換器</NavLink>
                            </NavItem>
                                </DropdownItem>
        
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        );
    }
}
export default Header;