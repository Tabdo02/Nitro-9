import Header from "./sections/Header"
import Footer from "./sections/Footer"
import WorkHero from "./work/WorkHero"
import OtherWork from "./work/OtherWork"

const WorkItem = () => {
  return (
    <>
    <Header className="bg-shades-50" />
    <WorkHero />
    <OtherWork />
    <Footer />
    </>
  )
}

export default WorkItem