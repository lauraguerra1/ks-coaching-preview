import './ServiceCard.css'
import { Service } from '../../../types'

const ServiceCard = ({ service, number}: { service: Service, number: number }) => {
  const scrollToService = (serviceNumber: number) => {
    document.querySelector(`.service${serviceNumber}`)?.scrollIntoView()
    console.log(document.querySelector(`.service${serviceNumber}`))
  }
  return (
    <section className='service-card'>
        <img className='service-card-image' src={service.image.src} alt={service.image.alt} />
      <div className='service-card-overlay' onClick={() => scrollToService(number)}>
        <button className='service-card-button' >Learn More</button>
      </div>
      <h2 className='service-card-title'>{service.title}</h2>
    </section>
  )
}

export default ServiceCard