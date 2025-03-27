import './Md.css';

import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

const Link = ({ node, children, ...props }) => {
  return <a href={props.href} target='_blank' rel='noreferrer'>{children} (外部サイト)</a>;
}

const Image = ({ node, children, ...props }) => {
  if (props.alt !== '') {
    const newSrc = `${process.env.PUBLIC_URL}${props.src}`;
    return <div><img src={newSrc} className='image' alt={props.alt}></img></div>;
  }else{
    return <img src={props.src} alt=''></img>;
  }
}

const Md = ({ text }) => {
  return (
    <>
      <div className='contents'>
        <ReactMarkdown remarkPlugins={remarkGfm} components={{ a: Link, img: Image }}>
          {text}
        </ReactMarkdown>
      </div>
    </>
  )
};

export default Md;
