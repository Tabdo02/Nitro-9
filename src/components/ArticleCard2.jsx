import { Link } from "react-router-dom"

const ArticleCard2 = ({id,title,subtitle,img,tags}) => {
  return (
    <article className="relative flex flex-col gap-y-6">
        
        <div className="w-full h-[376px] pointer-events-none">
            <img src={img} alt={title} className="object-cover w-full h-full" />
        </div>

        <div className="flex justify-between items-center pointer-events-none">
            {tags.map((tag,index)=>(
                 <div key={index} className="text-white bg-primary-500 py-1 px-3  rounded-full">{tag}</div>
            ))}
        </div>

        <div className="">
            
            {/* <h2 className="h2-small font-semibold mb-4 ">{title}</h2> */}
            <Link to={`/blog/${id}`} className="h2-small font-semibold">
                <span className="absolute inset-0"></span>
                {title}
            </Link>
            <p className="p3 pointer-events-none mt-4">{subtitle}</p>
        </div>    

    </article>
  )
}

export default ArticleCard2