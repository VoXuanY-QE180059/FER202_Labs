import { useState } from "react";

const Cart = () => {
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
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Toggle modal visibility
  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    handleShowCart,
    handleCloseCart,
    showCart,
  };
};

export default Cart;
