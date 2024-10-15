import React, { useContext, useState } from 'react';
import { Navbar, Nav, Form, Button, Modal, Table, Alert } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { LoginContext } from '../LoginContext'; // Import LoginContext
import './Navbar.css';


const NavbarComponent = ({
  totalItems,
  cartItems,
  handleShowCart,
  handleCloseCart,
  showCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const { isLoggedIn, userInfo, onLogout, onLoginSuccess } = useContext(LoginContext);
  
  // State to handle the login modal visibility
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Functions to handle opening and closing the login modal
  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://api-demo-4gqb.onrender.com/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password.");
      }

      const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);
      onLoginSuccess(data.user); // Notify successful login
      handleCloseLoginModal(); // Close the modal
    } catch (error) {
      setError(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar className="container-fluid">
        <Navbar.Brand href="#">Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#" active>
              Home
            </Nav.Link>
            <Nav.Link href="#">About us</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex" role="search">
            <input
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="form-control"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
          <Button variant="outline-info" onClick={handleShowCart}>
            <FaShoppingCart /> Items: {totalItems}
          </Button>
          {!isLoggedIn ? (
            // Show login modal when the button is clicked
            <Button variant="outline-primary" onClick={handleShowLoginModal}>
              Login
            </Button>
          ) : (
            <>
              <span className="text-light ms-3">Welcome, {userInfo?.username}</span>
              <Button variant="outline-danger" onClick={onLogout}>Logout</Button>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>

      {/* Cart Modal */}
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => increaseQuantity(item)}
                      >
                        +
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => decreaseQuantity(item)}
                      >
                        -
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLoginModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavbarComponent;
