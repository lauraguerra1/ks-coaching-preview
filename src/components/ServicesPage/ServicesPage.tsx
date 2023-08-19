import './ServicesPage.css'
import { services } from '../../data'
import ServiceCard from './ServiceCard/ServiceCard'
import ServiceDetail from './ServiceDetail/ServiceDetail'
import moonPhase from '../../assets/moonphase.png'

const ServicesPage = () => {
  const serviceCards = services.map((service, i) => <ServiceCard key={service.title} service={service} number={i} />)
  const serviceDetails = services.map((service, i) => <ServiceDetail key={service.title} service={service} number={i} />)
  return (
    <section className='service-page'>
      <header>
        <h1 style={{fontSize: '35px'}}>Services</h1>
      </header>
      <section className='service-cards-container'>
        {serviceCards}
      </section>
      <img style={{ maxWidth: '50%' }} src={moonPhase} alt="phases of the moon" />
      <section className='service-details-container'>
          {serviceDetails}
      </section>
    </section>
  )
}

export default ServicesPage