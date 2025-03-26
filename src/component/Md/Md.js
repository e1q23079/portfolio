import './Md.css';

import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

const Link = ({node,children,...props}) => {
  return <a href={props.href} target='_blank' rel='noreferrer'>{children} (外部サイト)</a>;
}

const Md = ({ text }) => {
  return (
    <>
      <div className='contents'>
        <ReactMarkdown remarkPlugins={remarkGfm} components={{a: Link}}>
          {text}
        </ReactMarkdown>
      </div>
    </>
  )
};

export default Md;
