import './Home.css';

import Icon from '../../icon.png';

import { motion } from 'framer-motion';

function Home() {
  return (
    <>
      <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 1, delay: 1 }}><div className='backGround'><div className='openMes'>日々挑戦し続ける，情報系学生の記録</div></div></motion.div>
      <motion.div className="Center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
        <img src={Icon} width='200px' alt='icon'></img>
        <p className='userName'>Q23079</p>
        <p className='userMessage'>日々挑戦し続ける，情報系学生の記録</p>
      </motion.div>
    </>
  )
};

export default Home;
