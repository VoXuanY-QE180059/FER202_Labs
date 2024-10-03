import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  Container,
  Row,
  Button,
  Form,
  Nav,
  Navbar,
  Carousel,
  Col,
  Card,
  FormControl,
  Modal,
} from "react-bootstrap";
import image1 from "./assets/images/pizza1.jpg";
import image2 from "./assets/images/pizza2.jpg";
import image3 from "./assets/images/pizza3.jpg";
import image4 from "./assets/images/pizza4.jpg";
import image5 from "./assets/images/pizza5.jpg";
import menu1 from "./assets/images/menu1.jpg";
import menu2 from "./assets/images/menu2.jpg";
import menu3 from "./assets/images/menu3.jpg";
import menu4 from "./assets/images/menu4.jpg";

function App() {
  // State for cart items and modal visibility
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add to cart function
  const addToCart = (item) => {
    const existingItem = cartItems.find((i) => i.title === item.title);
    if (existingItem) {
      setCartItems(
        cartItems.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Increase item quantity
  const increaseQuantity = (item) => {
    setCartItems(
      cartItems.map((i) =>
        i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  // Decrease item quantity
  const decreaseQuantity = (item) => {
    const updatedItems = cartItems
      .map((i) =>
        i.title === item.title ? { ...i, quantity: i.quantity - 1 } : i
      )
      .filter((i) => i.quantity > 0);
    setCartItems(updatedItems);
  };

  // Total items count
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Toggle modal visibility
  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <Container>
      <Row className="container p-3">
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
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="outline-success" type="submit" className="mx-2">
                Search
              </Button>
            </Form>
            {/* Cart button with item count */}
            <Button variant="outline-info" onClick={handleShowCart}>
              <FaShoppingCart /> Items: {totalItems}
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Row>

      <Row>
        <Carousel id="carouselExample">
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="First slide" />
            <Carousel.Caption>
              <h3>Neapolitan Pizza</h3>
              <p>
                if you are looking for a traditional Italian pizza, the
                Neapolitan is the best option
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Neapolitan Pizza</h3>
              <p>
                if you are looking for a traditional Italian pizza, the
                Neapolitan is the best option
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Neapolitan Pizza</h3>
              <p>
                if you are looking for a traditional Italian pizza, the
                Neapolitan is the best option
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image4} alt="Third slide" />
            <Carousel.Caption>
              <h3>Neapolitan Pizza</h3>
              <p>
                if you are looking for a traditional Italian pizza, the
                Neapolitan is the best option
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image5} alt="Third slide" />
            <Carousel.Caption>
              <h3>Neapolitan Pizza</h3>
              <p>
                if you are looking for a traditional Italian pizza, the
                Neapolitan is the best option
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>

      <Row>
        <div className="container p-5">
          <h1 className="text-left p-3">Our Menu</h1>
          <div className="d-flex">
            <Card style={{ width: "18rem" }} className="mx-3">
              <Card.Img variant="top" src={menu1} />
              <Card.Body>
                <Card.Title>Margenrita Pizza</Card.Title>
                <Card.Text>Price: $19.99</Card.Text>
                <Button
                  variant="dark"
                  className="w-100 text-center"
                  onClick={() =>
                    addToCart({ title: "Margenrita Pizza", price: 19.99 })
                  }
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }} className="mx-3">
              <Card.Img variant="top" src={menu2} />
              <Card.Body>
                <Card.Title>Mushroom Pizza</Card.Title>
                <Card.Text>Price: $19.99</Card.Text>
                <Button
                  variant="dark"
                  className="w-100 text-center"
                  onClick={() =>
                    addToCart({ title: "Mushroom Pizza", price: 19.99 })
                  }
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }} className="mx-3">
              <Card.Img variant="top" src={menu3} />
              <Card.Body>
                <Card.Title>Hawaiian Pizza</Card.Title>
                <Card.Text>Price: $19.99</Card.Text>
                <Button
                  variant="dark"
                  className="w-100 text-center"
                  onClick={() =>
                    addToCart({ title: "Hawaiian Pizza", price: 19.99 })
                  }
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }} className="mx-3">
              <Card.Img variant="top" src={menu4} />
              <Card.Body>
                <Card.Title>Pesto Pizza</Card.Title>
                <Card.Text>Price: $19.99</Card.Text>
                <Button
                  variant="dark"
                  className="w-100 text-center"
                  onClick={() =>
                    addToCart({ title: "Pesto Pizza", price: 19.99 })
                  }
                >
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Row>

      <div className="container p-5">
        <h2 className="text-center mt-3 mb-4">Book your table</h2>
        <Form>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formServer">
                <Form.Label>Select a Server</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>Server 1</option>
                  <option>Server 2</option>
                  <option>Server 3</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="formTextArea">
                <Form.Label>Additional Requests</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter any additional requests"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="warning" type="submit">
            Send Message
          </Button>
        </Form>
      </div>

      {/* Cart Modal */}
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <table className="table">
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
            </table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
