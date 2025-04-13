import { Link } from "react-router-dom"

const ArticlCard = ({id,title,subtitle,img,tags}) => {
  return (
    <article className="max-md:min-w-full">
            <div className="relative">

                <div className="h-[210px] md:h-[376px] w-full">
                    <img src={img} alt={title}  className="object-cover w-full h-full"/>
                </div>

                <div className="flex justify-between py-6">
                    {tags.map((tag)=>(
                        <div className="tags">{tag}</div>
                    ))}
                </div>

                <div>
                    <Link to={`/blog/${id}`} className="h3 md:h2-small font-semibold mb-4">
                        <span className="absolute inset-0"></span>
                        {title}
                    </Link>
                    <p className="p3">{subtitle}</p>
                </div>

            </div>
    </article>
  )
}

export default ArticlCard