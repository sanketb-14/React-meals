import React from 'react'
import { motion } from 'framer-motion'
import { FOOD_ITEMS as foodItems } from '../utils/data'
import Food from './Food'
import { FaUtensils } from 'react-icons/fa'

const FoodLists = () => {
  return (
    <section className="p-4 bg-transparent">
      <motion.h2 
        className="text-3xl font-bold text-white mb-6 flex items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaUtensils className="mr-2" /> Our Menu
      </motion.h2>
      <motion.ul 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {foodItems.map((food, index) => (
          <motion.li
            key={food.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Food food={food} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

export default FoodLists