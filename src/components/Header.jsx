import { motion } from 'framer-motion';
import { FaUtensils, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header 
      className='navbar fixed top-0 flex justify-between sm:justify-around  bg-base-300 opacity-80'> 
        <motion.h1 initial={{ opacity: 0 , y:-20  }} 
      animate={{ opacity: 1 , y:0 }} 
      transition={{ duration: 0.5 }} 
      className='satisfy text-3xl font-bold tracking-widest text-nowrap btn  bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text'>
          <span className=" mx-2 text-3xl text-accent"> <FaUtensils /> </span> React-Meals
        </motion.h1>
        <motion.div initial={{opacity:0 , y:-20}} animate={{opacity:1 , y:0}} transition={{duration:0.5}} whileHover={{
    scale: 1.1,
    transition: { duration: 0.5 },
  }} className="rounded-lg  w-full max-w-[12rem] flex bg-gradient-to-br text-lg from-accent to-secondary justify-center items-center p-2 cursor text-white">
        <span className="mx-2 ">
                <FaShoppingCart />
            </span>
        
            <p >Cart-Items - 0 </p>
          
            
         
          
        </motion.div>
    </header>
  )
}

export default Header
