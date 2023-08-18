import './ServicesPage.css'
import { services } from '../../data'
import ServiceCard from './ServiceCard/ServiceCard'

const ServicesPage = () => {
  const serviceEls = services.map((service, i) => <ServiceCard key={service.title} service={service} number={i+1} />)
  return (
    <section className='service-page'>
      <header>
        <h1 style={{fontSize: '40px'}}>Services</h1>
      </header>
      <section className='service-cards-container'>
        {serviceEls}
      </section>
      <section>
          <p className='service1'>service 1</p>
      </section>
    </section>
  )
}

export default ServicesPage