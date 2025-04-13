import Header from "./sections/Header"
import Footer from "./sections/Footer"
import OurServices from "./service section/OurServices"
import Capabilities from "./service section/Capabilities"
import WorkProcess from "./service section/WorkProcess"
import UX from "./service section/UX"
import Design from "./service section/Design"
import WebDev from "./service section/WebDev"
import SEO from "./service section/SEO"

const Service = () => {
  return (
   <>
   <Header txtColor="text-primary-600" className="bg-shades-300" />
   <OurServices />
   <Capabilities />
   <WorkProcess />
   <UX />
   <Design />
   <WebDev />
   <SEO />
   <Footer />
   </>
  )
}

export default Service