import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Footer from "./sections/Footer"
import Services from "./sections/Services"
import Works from "./sections/Works"
import Process from "./sections/Process"
import Testimonials from "./sections/Testimonials"
import Articls from "./sections/Articls"
import Clients from "./sections/Clients"
import Faq from "./sections/Faq"

const App = () => {
  return (
    <>
    <Header className="absolute" />
    <Hero />
    <Services />
    <Works />
    <Process />
    <Testimonials />
    <Articls />
    <Clients />
    <Faq />
    <Footer />
    </>
  )
}

export default App