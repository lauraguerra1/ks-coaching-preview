import './ServiceDetail.css'
import { Service } from '../../../types'
import back from '../../../assets/back.png'

type ServiceDetailProps = {
  service: Service,
  number?: number,
  serviceIsSelected?: boolean,
  deselectService?: () => void 
}

const ServiceDetail = ({ service, number, serviceIsSelected, deselectService }: ServiceDetailProps) => {
  return (
    <section style={{width: '100%'}}>
      {serviceIsSelected && <button className='service-back-btn' onClick={deselectService}><img src={back} alt='back button'/></button>}
      <section className='service-detail' id={`service${number}`}>
        <div className='service-detail-image-container'>
          <img className='service-detail-image' src={service.image.src} alt={service.image.alt} />
          <button className='book-service-button'>BOOK NOW</button>
        </div>
        <article className='service-detail-article'>
          <h2 className='service-detail-title'>{service.title}</h2>
          <div className='service-detail-description'>
            <p>{service.description}</p>
          </div>
        </article>
      </section>
    </section>
  )
}

export default ServiceDetail