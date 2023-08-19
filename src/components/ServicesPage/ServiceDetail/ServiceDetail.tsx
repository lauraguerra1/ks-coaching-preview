import './ServiceDetail.css'
import { Service } from '../../../types'
const ServiceDetail = ({ service, number }: { service: Service, number: number }) => {
  return (
    <section className='service-detail' id={`service${number}`}>
      <div className='service-detail-image-container'>
        <img src={service.image.src} alt={service.image.alt} />
        <button className='book-service-button'>BOOK NOW</button>
      </div>
      <article className='service-detail-article'>
        <h2 className='service-detail-title'>{service.title}</h2>
        <p className='service-detail-description'>
          {service.description}
        </p>
      </article>
    </section>
  )
}

export default ServiceDetail