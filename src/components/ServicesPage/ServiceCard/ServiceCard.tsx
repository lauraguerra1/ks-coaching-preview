import './ServiceCard.css'
import { Service } from '../../../types'

type ServiceCardProps = {
  smallScreen: boolean,
  service: Service,
  number: number,
  selectService: (service: Service) => void
}
const ServiceCard = ({ smallScreen, service, number, selectService}: ServiceCardProps) => {
  const scrollToService = (serviceNumber: number) => {
    document.querySelector(`#service${serviceNumber}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='service-card' id={`serviceCard${number}`}>
        <img className='service-card-image' src={service.image.src} alt={service.image.alt} />
      <div className='service-card-overlay' onClick={() => smallScreen? selectService(service) : scrollToService(number)}>
        <button className='service-card-button' >Learn More</button>
      </div>
      <h2 className='service-card-title'>{service.title}</h2>
    </section>
  )
}

export default ServiceCard