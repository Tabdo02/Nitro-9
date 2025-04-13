import Timeline from "../components/Timeline"
import { timeline } from "../constants"

const Process = () => {
  return (
    <section className="bg-shades-50 p-px py-20 lg:py-[100px] 3xl:py-[140px]"> 

      <div className="mb-[60px] lg:mb-[100px]">
          <h5 className="text-center md:text-start lg:text-center h5 md:p2 font-bold text-primary-500 mb-3">Our Design Process</h5>
          <h1 className="text-center md:text-start lg:text-center mb-5 h2-medium md:h2 font-semibold">What is your web design<br className="hidden lg:block" /> process?<br className="hidden md:block lg:hidden" /> How do you start?</h1>
          <p className="p2 lg:text-center font-medium">Our main web design process is divided into the following steps:</p>
      </div>

      <div className="flex flex-col justify-center items-center ">
          {timeline.map((tl)=>(
            <Timeline key={tl.id} {...tl} />
          ))}

      </div>
    </section>
  )
}

export default Process