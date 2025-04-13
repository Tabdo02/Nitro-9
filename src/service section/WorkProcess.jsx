import Idea from "../assets/SVG/Idea"
import { bgtxt1, workProcess } from "../constants"

const WorkProcess = () => {
  return (
    <section className="p-px lg:py-10 bg-shades-300 pointer-events-none">
        <div className="flex flex-col space-y-[60px] bg-primary-800 py-[60px] md:py-20 px-5 md:px-10">
            
            <div className="flex flex-col lg:flex-row space-y-[10px] lg:space-y-0 lg:space-x-[10px]">
               <h2 className="h3-small font-medium md:h2-small flex-1">{bgtxt1}</h2> 
               <div className="flex justify-center items-center">
                <Idea />
               </div>
            </div>

            <div>
                <p className="p1 md:p1 mb-10">Our Work Process</p>
                <div className="flex flex-col  space-y-[60px] ">
                    {workProcess.map((work)=>(
                        <div key={work.id} className="flex flex-col lg:items-start lg:flex-row space-y-5 lg:space-y-0">
                            
                            <div className="w-[210px] mr-[120px]">
                                <p className="font-switzer font-medium text-[14px] leading-[14px]">0{work.id+1}</p>
                                <h2 className="h2-medium md:h2 font-semibold">{work.title}</h2>
                            </div>

                            <p className="p3 md:p2 flex-1">
                                {work.subtitle}
                            </p>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  )
}

export default WorkProcess