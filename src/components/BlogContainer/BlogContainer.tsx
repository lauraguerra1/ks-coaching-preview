import './BlogContainer.css'
import KSPortrait from '../../assets/ks-portrait.jpeg'
import Blog from './Blog/Blog'
import { blogs } from '../../data';

const BlogContainer = () => {
  const blogEls = blogs.reverse().map((blog, i) => <Blog blog={blog} isLast={i === blogs.length - 1 ? true : false} />)
  return (
    <>
      <section className='blog-landing'>
        <img className='blog-landing-img' src={KSPortrait} alt='portrait of katie sanger looking into the camera with green foliage in the background' />
        <div className='article-container'>
          <article style={{alignSelf: 'flex-start'}}>
            <h1>BLOG</h1>
            <p>Browse creative, meaningful & insightful musings on motherhood, well being, addiction + recovery, mental health, spirituality, psychology and astrology</p>
          </article>
          <article id='featuredBlog'>
            <p>Read Our Latest:</p>
            <h2>{blogs[blogs.length - 1].title}</h2>
            <p>{blogs[blogs.length - 1].tagline}.</p>
            <a href={blogs[blogs.length - 1].link} target="_blank" className='view-post-btn'>view the post</a>
          </article>
        </div>
      </section>
      {blogEls}
    </>
  )
}

export default BlogContainer