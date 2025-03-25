import './Md.css';

import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

const Md = ({ text }) => {
  return (
    <>
      <div className='contents'>
        <ReactMarkdown remarkPlugins={remarkGfm}>
          {text}
        </ReactMarkdown>
      </div>
    </>
  )
};

export default Md;
