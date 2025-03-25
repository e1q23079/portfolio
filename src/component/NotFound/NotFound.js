import './NotFound.css';

import Icon from '../../icon.png';

function NotFound() {
  return (
    <>
      <div className="Center">
        <img src={Icon} width='200px' alt='icon'></img>
        <p className='notFound'>Not Found</p>
        <p className='message'>お探しのページは見つかりませんでした．</p>
        <a href='#home' className='message'>トップ</a>
      </div>
    </>
  )
};

export default NotFound;
