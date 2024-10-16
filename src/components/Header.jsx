import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <motion.header
        className="rounded-lg shadow-xl opacity-70 w-full bg-base-200/75 text-white p-4 flex justify-between items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="flex items-center text-3xl font-bold tracking-widest">
          <FaUtensils className="mr-2" />
          <h1 className="satisfy text-secondary">React-Meals</h1>
        </div>
        <button
          onClick={openCart}
          className="bg-red-700 px-4 py-2 rounded-full flex items-center hover:bg-red-800"
        >
          <FaShoppingCart className="mr-2" />
          <span>Cart-Items - {cartItemCount}</span>
        </button>
      </motion.header>
      {isCartOpen && <Cart onClose={closeCart} />}
    </>
  );
};

export default Header;