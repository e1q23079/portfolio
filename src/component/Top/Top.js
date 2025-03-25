import './Top.css';

import Icon from '../../icon.png';

function Top() {
  return (
    <>
      <div className="Center">
        <img src={Icon} width='200px' alt='icon'></img>
        <p className='userName'>Q23079</p>
        <p className='userMessage'>色々なプログラムを書いている学生です！！</p>
      </div>
    </>
  )
};

export default Top;
