import './BlogContainer.css'
import KSPortrait from '../../assets/ks-portrait.jpeg'
import BlogPost from './BlogPost/BlogPost'
import { blogs } from '../../data';
import expandMore from '../../assets/expand-more.png'

const BlogContainer = ({smallScreen}: {smallScreen: boolean}) => {
  const blogEls = blogs.map((blog, i) => {
    if (i) {
      return <BlogPost blog={blog} isLast={i === blogs.length - 1 ? true : false} />
    }
  })
  return (
    <>
      <section className='blog-landing'>
        <img className='blog-landing-img' src={KSPortrait} alt='portrait of katie sanger looking into the camera with green foliage in the background' />
        <div className='article-container'>
          <article id='articleHeading' style={{ alignSelf: 'flex-start'}}>
            <h1>BLOG</h1>
            <p>Browse creative, meaningful & insightful musings on motherhood, well being, addiction + recovery, mental health, spirituality, psychology and astrology</p>
          </article>
          {!smallScreen && <article id='featuredBlog'>
            <p>Read Our Latest:</p>
            <h2>{blogs[0].title}</h2>
            <p>{blogs[0].tagline}</p>
            <a href={blogs[0].link} target="_blank" className='view-post-btn'>view the post</a>
          </article>}
          <header className='blog-heading'>
            <h1>BLOG</h1>
            <p>Browse creative, meaningful & insightful musings on motherhood, well being, addiction + recovery, mental health, spirituality, psychology and astrology</p>
          </header>
        </div>
        <button className='scroll-btn'onClick={() => document.querySelector('.blog-list')?.scrollIntoView({ behavior: 'smooth' })}><img src={expandMore}  /></button>
      </section>
      <section className='blog-list'>
        <header className='blog-heading2'>
          <h1>BLOG</h1>
          <p>Browse creative, meaningful & insightful musings on motherhood, well being, addiction + recovery, mental health, spirituality, psychology and astrology</p>
        </header>
        {smallScreen && <BlogPost blog={blogs[0]} isLast={false} />}
        {blogEls}
      </section>
    </>
  )
}

export default BlogContainer