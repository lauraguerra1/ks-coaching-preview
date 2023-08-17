import './BlogContainer.css'
import KSPortrait from '../../assets/ks-portrait.jpeg'
import BlogPost from './BlogPost/BlogPost'
import { blogs } from '../../data';

const BlogContainer = () => {
  const blogEls = blogs.map((blog, i) => {
    if (i !== blogs.length - 1) {
      return <BlogPost blog={blog} />
    }
  })
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
      <section className='blog-list'>
        {blogEls}
      </section>
    </>
  )
}

export default BlogContainer