
import { motion } from 'framer-motion'
import { FaShoppingCart, FaStar } from 'react-icons/fa'

const Food = ({ food }) => {
  return (
    <motion.div 
      className="card bg-gradient-to-bl from-secondary vai-primary to-null shadow-xl overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <figure>
        <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between items-center">
          {food.name}
          <div className="badge badge-secondary">${food.price.toFixed(2)}</div>
        </h2>
        <p>{food.description}</p>
        <div className="card-actions justify-end mt-4">
          <motion.button 
            className="btn btn-primary bg-gradient-to-br border-none from-primary  to-secondary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaShoppingCart className="mr-2" /> Add to Cart
          </motion.button>
        </div>
      </div>
      <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 p-2 rounded-full flex items-center">
        <FaStar className="mr-1" /> 4.5
      </div>
    </motion.div>
  )
}

export default Food