import Header from "./sections/Header"
import Footer from "./sections/Footer"
import Testimonials from "./sections/Testimonials"
import Clients from "./sections/Clients"
import AboutHero from "./about/AboutHero"
import MeetTeam from "./about/MeetTeam"

const About = () => {
  return (
    <>
    <Header  txtColor="text-primary-600" className="bg-shades-300"/>
    <AboutHero />
    <MeetTeam />
    <Testimonials />
    <Clients />
    <Footer />
    </>
  )
}

export default About