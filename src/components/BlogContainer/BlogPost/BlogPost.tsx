import { Blog } from "../../../types"
import './BlogPost.css'

type BlogProps = {
  blog: Blog,
  isLast: boolean
}

const BlogPost = ({ blog, isLast }: BlogProps) => {
  return (
    <a href={blog.link} target='-blank'className={isLast ? 'last-blog' : 'blog'}>
      <article className='blog-article'>
        <p className='blog-p'><i style={{fontFamily: "'Playfair Display', serif"}}>{blog.tag}</i></p>
        <h3 className='blog-title' style={{fontFamily: "'Playfair Display', serif", fontWeight: '400'}}>{blog.title}</h3>
        <p className='blog-p'>{blog.tagline}</p>
      </article>
      <img className='blog-img' src={blog.coverImg} alt={blog.title} />
    </a>
  )
}

export default BlogPost