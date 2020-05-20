import React from 'react';
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,   
   NavLink,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
 } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from '../images/neuralium.png'
interface IMenuState{
   isOpen: boolean
}
class Menu extends React.Component<{},IMenuState> {
 
   constructor(props: Readonly<{}>){
      super(props);
      this.state = {
         isOpen: false
      };
   }

   toggle = () => {
      this.setState({
         isOpen: !this.state.isOpen}
      );
   }

  render() { 
   return (
 
      <Navbar color="light" light expand="md" sticky="top">
      <NavbarBrand tag={Link} to="/"><img src={Logo} alt="Neuralium logo" height="50px" width="50px" ></img>  Neuralium Puzzles</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="mr-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Puzzles
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
              <NavLink tag={Link} to="/content">Tic Tac Toe</NavLink>
              </DropdownItem>
              <DropdownItem>
                Dots
              </DropdownItem>              
              <DropdownItem>
                Swipe
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink tag={Link} to="/about">About</NavLink>
          </NavItem>
          
        </Nav>        
      </Collapse>
    </Navbar>
 
   )
    
  }
 
}
 
export default Menu;