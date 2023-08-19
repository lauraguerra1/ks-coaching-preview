import './ServicesPage.css'
import { services } from '../../data'
import ServiceCard from './ServiceCard/ServiceCard'
import ServiceDetail from './ServiceDetail/ServiceDetail'
import moonPhase from '../../assets/moonphase.png'
import { useState } from 'react'
import { Service } from '../../types'

const ServicesPage = ({ smallScreen }: { smallScreen: boolean }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const selectService = (service: Service | null) => setSelectedService(service)
  const serviceCards = services.map((service, i) => <ServiceCard key={service.title} service={service} number={i} smallScreen={smallScreen} selectService={selectService}/>)
  const serviceDetails = services.map((service, i) => <ServiceDetail key={service.title} service={service} number={i} />)
  
  return (
    <section className='service-page'>
      {selectedService
        ? <ServiceDetail service={selectedService} serviceIsSelected={true} deselectService={() => selectService(null)} />
        : 
        <>
          <header>
            <h1 style={{fontSize: '35px'}}>Services</h1>
          </header>
          <section className='service-cards-container'>
            {serviceCards}
          </section>
          <img style={{ maxWidth: '50%' }} src={moonPhase} alt="phases of the moon" />
        </>
      }
      {!smallScreen && <section className='service-details-container'>
        {serviceDetails}
      </section>}
      {!selectedService && 
        <>
          <p>Book A Consultation </p>
          <p>More Stuff goes here</p>
        </>
      }
    </section>
  )
}

export default ServicesPage