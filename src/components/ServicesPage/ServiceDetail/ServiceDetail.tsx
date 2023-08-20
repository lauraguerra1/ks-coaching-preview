import './ServiceDetail.css'
import { Service } from '../../../types'
import back from '../../../assets/back.png'
import {useState, useRef, useEffect} from 'react'

type ServiceDetailProps = {
  service: Service,
  number?: number,
  serviceIsSelected?: boolean,
  deselectService?: () => void 
}

const ServiceDetail = ({ service, number, serviceIsSelected, deselectService }: ServiceDetailProps) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current!);
    return () => observer.unobserve(domRef.current!);
  }, []);

  return (
    <section style={{ width: '100%' }} ref={domRef}>
      {serviceIsSelected &&
        <div className='selected-service-top'>
          <button className='service-back-btn' onClick={deselectService}><img src={back} alt='back button' /></button>
          <h2 className='service-detail-title'>{service.title}</h2>
        </div>
      }
      <section className={`service-detail ${isVisible? 'visible' : ''}`} id={`service${number}`}>
        <div className='service-detail-image-container'>
          <img className='service-detail-image' src={service.image.src} alt={service.image.alt} />
          <button className='book-service-button'>BOOK NOW</button>
        </div>
        <article className='service-detail-article'>
          {!serviceIsSelected && <h2 className='service-detail-title'>{service.title}</h2>}
          <div className='service-detail-description'>
            <p>{service.description}</p>
          </div>
        </article>
      </section>
    </section>
  )
}

export default ServiceDetail