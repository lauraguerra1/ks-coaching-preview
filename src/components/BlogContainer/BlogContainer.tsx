import './BlogContainer.css'
import KSPortrait from '../../assets/ks-portrait.jpeg'

const BlogContainer = () => {
  return (
    <>
      <section className='blog-landing'>
        <img className='blog-landing-img' src={KSPortrait} alt='portrait of katie sanger looking into the camera with green foliage in the background' />
        <article>
          <h1>BLOG</h1>
          <p>Browse creative, meaningful & insightful musings on motherhood, well being, addiction + recovery, mental health, spirituality, psychology and astrology</p>
        </article>
      </section>
    </>
  )
}

export default BlogContainer