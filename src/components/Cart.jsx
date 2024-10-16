import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';

const Cart = ({ onClose }) => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  const cartContent = (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="bg-base-300 p-4 rounded-lg shadow-md "
    >
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name}</span>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 mr-2 p-1 border rounded"
                />
                <span className="mr-2">${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-xl font-bold">
            Total: ${cartTotal.toFixed(2)}
          </div>
        </>
      )}
      <button  className="mt-4 bg-red-500 text-white px-4 py-2 rounded mx-4">
        Order Now
      </button>
      <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Close
      </button>
      
    </motion.div>
  );

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center "
        onClick={onClose}
      >
        <div className="w-full max-w-4xl"onClick={(e) => e.stopPropagation()}>
          {cartContent}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default Cart;