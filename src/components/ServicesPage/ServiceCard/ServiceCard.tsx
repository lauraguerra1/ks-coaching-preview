import './ServiceCard.css'
import { Service } from '../../../types'

const ServiceCard = ({ service, number}: { service: Service, number: number }) => {
  const scrollToService = (serviceNumber: number) => {
    document.querySelector(`.service${serviceNumber}`)?.scrollIntoView()
  }
  return (
    <section className='service-card'>
      <img className='service-card-image' src={service.image.src} alt={service.image.alt} />
      <div className='service-card-overlay'>
        <button className='service-card-button' onClick={() => scrollToService(number)}>Learn More</button>
      </div>
      <h2 className='service-card-title'>{service.title}</h2>
    </section>
  )
}

export default ServiceCard