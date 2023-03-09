import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../asserts/Hekto.png'
import { Badge} from 'rsuite';
import {BsCartCheck} from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CartContext} from '../../Hooks/Context/CartContext'




export const NavbarComponent = () => {
  const [search ,setSearch] = useState('')
  //const [navLinkStyle , setNavLinkStyle] = useState(false)
  const {cartItems} = useContext(CartContext)



  
  return (
    
    
    <>
    <Navbar bg="light" expand="lg" >
      <Container fluid  style={{ paddingLeft:'2rem',  paddingRight:'2rem', paddingBottom:'1rem', paddingTop:'1rem'}} >       
      <img src={logo} alt="" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' , fontSize : '1rem' , paddingLeft:'1rem'}}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop">shop</Nav.Link>
            <Nav.Link href="/cart">cart</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
           <div style={{ paddingRight:'1.5rem',  }}>
            <Link to='/cart'>
                <Badge content={cartItems.length}  >
                  <Button variant="outline-success"  ><BsCartCheck/></Button>
                </Badge>
            </Link>
              
           </div>
         
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}


{/** {navLink.map((link) => (
                  <Link to={link.path} key={link.id} onClick={''}>
                      <p  className={ link.active ? "font-bold text-[#FB2E86] border-b-2 border-pink-500" : ''}>{link.display}</p>
                   </Link>
            ))
          } */}