import { Blog } from "../../../types"
import './BlogPost.css'

type BlogProps = {
  blog: Blog,
}

const BlogPost = ({ blog }: BlogProps) => {
  return (
    <section className='blog'>
      <article>
        <p><i style={{fontFamily: "'Playfair Display', serif"}}>{blog.tag}</i></p>
        <h3 style={{fontFamily: "'Playfair Display', serif", fontWeight: '400'}}>{blog.title}</h3>
        <p>{blog.tagline}</p>
      </article>
      <img src={blog.coverImg} alt={blog.title} />
    </section>
  )
}

export default BlogPost