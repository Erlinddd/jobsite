import React from 'react'
import {Navbar,Container,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return ( 
        <div>
<Navbar className="header">
  <Container>
     <Navbar.Brand href="/" style={{fontSize:"30px",fontWeight:"bold",color:"gray"}}>INVENTORY</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Button  className="on-hover" variant="secondary">Log Out</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
      );
}
 
export default Header; 
