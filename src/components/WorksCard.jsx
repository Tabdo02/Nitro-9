import { Link } from "react-router-dom"

const WorksCard = ({id,img,subtitle,tags,title}) => {
  return (
    <div key={id} className={`relative border-b border-primary-800 ${id===1 && 'max-lg:mb-5'} pb-4`}>

    <div className="h-[210px] md:h-[438px] lg:h-[430px] w-full mb-4">
      <img src={img} alt={title} className="object-cover w-full h-full" />
    </div>

    <div className="flex flex-col space-y-5">
      
      <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:justify-between md:items-center">
          
          <Link to={`/work/${id}`}>
            <span className="absolute inset-0"></span>
            <h2 className="h2-small font-semibold pointer-events-none flex-1">{title}</h2>
          </Link>
          
          <div className="flex space-x-4 ">
            {tags.map((tag,index)=>(
              <div className="tags cursor-pointer" key={index}>
                    {tag}
              </div>
            ))}
          </div>

      </div>

      <p className="p3 font-medium md:font-[400]">{subtitle}</p>
    </div>

  </div>
  )
}

export default WorksCard