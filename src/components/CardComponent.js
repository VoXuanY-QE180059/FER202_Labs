import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";

function CardComponent({ addToCart }) {  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleShowMore = () => {
    window.location.href = '/full-menu';  // Thay thế navigate bằng window.location.href
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api-demo-4gqb.onrender.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.data);  
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-5"><Spinner animation="border" /></div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">Error: {error}</div>;
  }

  return (
    <div className="container p-5">
      <h1 className="text-center">Our Menu</h1>
      <div className="row">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="col-lg-3 mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Button variant="secondary" onClick={handleShowMore}>See Full Menu</Button>
      </div>
    </div>
  );
}

export default CardComponent;
