import { works } from "../constants"
import WorksCard from '../components/WorksCard'
import { useParams } from "react-router-dom"

const OtherWork = () => {
  const {id} = useParams(); 
  console.log(id);
  return (
    <section className="p-px py-[100px] 3xl:py-[140px] bg-shades-50">
        <h1 className="h2-small md:h1 font-medium text-center md:text-start mb-[60px]">See More Works</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px]">
        {
          works.slice(1,3).map((work)=>(
            work.id != id &&
          (<WorksCard {...work} key={work.id} />)
          ))
        }

      </div>
    </section>
  )
}

export default OtherWork