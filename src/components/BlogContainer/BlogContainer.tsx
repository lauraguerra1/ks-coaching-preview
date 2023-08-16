import './BlogContainer.css'
import KSPortrait from '../../assets/ks-portrait.jpeg'

const BlogContainer = () => {
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
            <h2>Do Nothing.</h2>
            <p>The power of doing nothing in times of uncertainty.</p>
            <button className='view-post-btn'>view the post</button>
          </article>
        </div>
      </section>
    </>
  )
}

export default BlogContainer