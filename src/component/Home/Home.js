import './Home.css';

import Icon from '../../icon.png';

import { motion } from 'framer-motion';

function Home() {
  return (
    <>
      <motion.div className="Center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }}>
        <img src={Icon} width='200px' alt='icon'></img>
        <p className='userName'>Q23079</p>
        <p className='userMessage'>色々なプログラムを書いている学生です！！</p>
      </motion.div>
    </>
  )
};

export default Home;
