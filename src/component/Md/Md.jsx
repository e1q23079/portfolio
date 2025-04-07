import './Md.css';

import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';

const Link = ({ node, children, ...props }) => {
  if (props.href === 'https://e1q23079.github.io/portfolio/') {
    return <a href={props.href} target='_blank' rel='noreferrer'>{children}</a>;
  } else {
    return <a href={props.href} target='_blank' rel='noreferrer'>{children} (外部サイト)</a>;
  }
}

const Image = ({ node, children, ...props }) => {
  if (props.alt !== '') {
    const newSrc = `${process.env.PUBLIC_URL}${props.src}`;
    return <div><img src={newSrc} className='image' alt={props.alt}></img></div>;
  } else {
    return <img src={props.src} alt=''></img>;
  }
}

const H1 = ({ node, children, ...props }) => {
  return <h1><span className='section'>|</span> {children}</h1>
}

const H2 = ({ node, children, ...props }) => {
  return <h2><span className='section'>|</span> {children}</h2>
}

const Md = ({ text }) => {
  return (
    <>
      <div className='contents'>
        <ReactMarkdown remarkPlugins={remarkGfm} components={{ a: Link, img: Image, h1: H1, h2: H2 }}>
          {text}
        </ReactMarkdown>
      </div>
    </>
  )
};

export default Md;
