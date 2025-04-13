import { Link } from "react-router-dom"
import ArticlCard from "../components/ArticlCard"
import { articls } from "../constants"

const Articls = () => {
  return (
    <section className="p-px py-20 md:py-[100px] 3xl:py-[140px] bg-shades-50">
     
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-5 mb-[60px] ">
        
        <h1 className="h2-medium md:h1 font-semibold pointer-events-none">Latest Articles</h1>

        <Link to='/blog'>
          <button className="btn-see-all-1">
              View All
          </button>
        </Link>

      </div>

      <div className="flex justify-between items-start max-md:overflow-auto max-md:scroll-hide gap-x-8">
        {
          articls.map((articl)=>(
            <ArticlCard {...articl}  key={articl.id}/>
          ))
        }

      </div>
     
    </section>
  )
}

export default Articls