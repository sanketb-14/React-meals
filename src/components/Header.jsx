import { motion } from 'framer-motion';
import { FaUtensils, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.header 
      className='navbar flex justify-around bg-gradient-to-r from-primary to-secondary'
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }} // Animation settings
    > 
        <h1 className='satisfy text-3xl font-bold tracking-widest text-nowrap bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent' >   <span className="text-secondary mx-2 text-3xl"> <FaUtensils /> </span> React-Meals</h1>
        <div className="rounded-lg bg-base-200 w-full max-w-[12rem] flex justify-center items-center p-2">
        <span className="mx-2">
                <FaShoppingCart />
            </span>
        
            <p>Cart-Items - </p>
            <span>0</span> {/* meal icon */}
            
         
          
        </div>
    </motion.header>
  )
}

export default Header
