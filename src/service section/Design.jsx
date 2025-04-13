import { bulletPoint } from "../assets"
import { design, designtxt } from "../constants"
import DesignImg from '../assets/SVG/DesignImg'

const Design = () => {
  return (
    <section className="p-px text-primary-800 lg:py-10 pointer-events-none">

        <div className="flex flex-col 3xl:flex-row 3xl:space-x-[60px] 3xl:items-center  bg-primary-100 py-10 md:py-20 lg:py-[100px] px-5 md:px-8">
            <div className="flex flex-col space-y-[35px]">
                
                <h1 className="h2-small md:h2 3xl:h1 font-semibold">Design</h1>
                
                <p className="p3 md:p2">{designtxt}</p>
                
                <div className="flex flex-col space-y-[9px]">
                    {design.map((des,index)=>(
                        <div key={index} className="flex items-center space-x-[9px]">
                            <img src={bulletPoint} alt="bullet point" className="object-contain" height={32} width={32} />
                            <p className="p1 font-medium text-primary-700">{des}</p>
                        </div>
                    ))}
                </div>

            </div>

            <div className="flex justify-center md:justify-start items-center mt-10">
                    <DesignImg />
            </div>

        </div>
        
    </section>
  )
}

export default Design