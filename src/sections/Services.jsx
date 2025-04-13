import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="bg-shades-50 py-20 lg:py-[100px] 3xl:py-[140px] p-px flex flex-col space-y-20">
      
      <div className="pointer-events-none">
          <h5 className="h5 font-bold text-primary-400 mb-5">Our Delightful Services</h5>
          <h1 className="h2-small md:h2 lg:h1-small 3xl:h1 3xl:font-[400] font-semibold">We are a group of passionate people working closely with clients so their business can grow.</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service)=>(
            <ServiceCard  key={service.id} {...service}/>
          ))}
      </div>

    </section>
  )
}

export default Services