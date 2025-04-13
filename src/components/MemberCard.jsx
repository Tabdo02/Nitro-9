import { meetSocials } from "../constants"

const MemberCard = ({id,title,info,img}) => {
  return (
    <div className="">
       
        <div className="relative w-full h-[400px]">
            <img src={img} alt={title} className="object-cover w-full h-full transition-opacity duration-300" />
            <div className="absolute inset-0 bg-[#09ADA8]/90 flex justify-center items-center space-x-8 transition-opacity duration-300 opacity-0 hover:opacity-100">
                {meetSocials.map((sc)=>(
                    <a href="#" key={sc.id}><img src={sc.img} alt={sc.alt} /></a>
                ))}
            </div>
        </div>

        <div className="py-5 pointer-events-none">
            <h3 className="h3 font-medium mb-4">{title}</h3>
            <p className="p2">{info}</p>
        </div>

    </div>
  )
}

export default MemberCard