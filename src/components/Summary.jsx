import React from 'react'
import { motion } from 'framer-motion'

const Summary = () => {
  return (
    <motion.aside
    className="rounded-xl glass backdrop-blur-md bg-base-200/25 bg-opacity-20 w-full max-w-3xl p-8 m-4 text-center shadow-2xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.h1 
      className="text-4xl font-bold mb-4 text-white"
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      Delicious Food, Delivered To You
    </motion.h1>
    <motion.p 
      className="text-xl text-gray-100"
      initial={{ y: 20 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      Choose your favorite meal from our broad selection of available meals and enjoy a delicious
lunch or dip at home.

All our meals are cooked with high-quality ingredients, just-in-time and of course by
experienced chefs!
    </motion.p>
    <motion.button
      className="mt-6 btn btn-lg bg-white text-purple-600 font-semibold border-none hover:bg-purple-100 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Order Now
    </motion.button>
  </motion.aside>
  )
}

export default Summary
