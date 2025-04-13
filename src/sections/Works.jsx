import { Link } from "react-router-dom"
import WorksCard from "../components/WorksCard"
import { works } from "../constants"

const Works = () => {

  return (
    <section className="bg-shades-50 p-px py-[100px] 3xl:py-[140px]">
      
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-5 md:space-y-0 mb-[60px]">
        <div className="pointer-events-none">
          <h1 className="h2-small md:h1 md:font-semibold font-medium">Selected works</h1>
          <p className="p3 font-medium">See our featured works here</p>
        </div>
        <Link to='/work'>
          <button className="btn-see-all-1">
            View All
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px]">
        {
          works.map((work)=>(
          <WorksCard {...work} key={work.id} />
          ))
        }

      </div>
      
    </section>
  )
}

export default Works