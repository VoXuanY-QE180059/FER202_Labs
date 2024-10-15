import React, { useContext } from 'react';
import NavbarComponent from './components/NavbarComponent';
import CarouselComponent from './components/CarouselComponent';
import CardComponent from './components/CardComponent';
import ReservationForm from './components/ReservationForm';
import { LoginContext } from './LoginContext'; // Import LoginContext
import LoginComponent from './components/LoginComponent'; // Login popup
import Cart from './components/Cart'; // Import Cart logic

function App() {
  const { isLoggedIn, userInfo, onLoginSuccess, onLogout } = useContext(LoginContext);

  // Sử dụng Cart để quản lý giỏ hàng
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    handleShowCart,
    handleCloseCart,
    showCart,
  } = Cart();

  return (
    <div className="bg-dark-subtle">
      <NavbarComponent
        totalItems={totalItems}
        cartItems={cartItems}
        handleShowCart={handleShowCart}
        handleCloseCart={handleCloseCart}
        showCart={showCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <CarouselComponent />
      <CardComponent addToCart={addToCart} /> {/* Truyền hàm addToCart vào CardComponent */}
      <ReservationForm />
      <LoginComponent modalOpen={false} toggleModal={() => {}} onLoginSuccess={onLoginSuccess} />
    </div>
  );
}

export default App;
