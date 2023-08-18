import './ServicesPage.css'
import { services } from '../../data'
import ServiceCard from './ServiceCard/ServiceCard'

const ServicesPage = () => {
  const serviceEls = services.map((service, i) => <ServiceCard key={service.title} service={service} number={i+1} />)
  return (
    <section className='service-cards-container'>
      {serviceEls}
    </section>
  )
}

export default ServicesPage