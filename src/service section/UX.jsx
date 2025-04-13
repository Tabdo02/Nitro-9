import { ux, uxTxt } from "../constants"
import People from '../assets/SVG/People'

const UX = () => {
  return (
    <section className="p-px py-10 text-primary-700 pointer-events-none">
        <div className="bg-primary-50 py-10 md:py-20 lg:py-10 px-5 md:px-8">
            
            <p className="p5 font-bold mb-10">Our UX Design Process</p>
            
            <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-5">

                <div className="flex-1">
                    <h1 className="h2-small md:h2 lg:h1 font-semibold mb-[27px]">User Experience</h1>
                    <div className="flex flex-col space-y-5">
                        {uxTxt.map((txt,index)=>(
                            <p key={index} className="p3 md:p2">
                                {txt}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center items-center md:items-start md:justify-start">
                            <People />
                </div>

            </div>
            
            <ul className="mt-10 mb-[60px] md:mb-[95px]">
                {ux.map(({id,title})=>(
                    <li key={id}>
                        <h2 className="h3-small md:h2-small font-medium">{`${id+1}. ${title}`} </h2>
                    </li>
                ))}

            </ul>
            
            <div className="lg:max-w-[768px] flex flex-col space-y-[60px]">
                {ux.map(({id,title,subtitle})=>(
                    <div key={id}>
                        <h2 className="h2-small md:h2-small lg:h2 font-semibold mb-5">{`${id+1}. ${title}`} </h2>
                        <ul className="flex flex-col space-y-5">
                            {subtitle.map((sub,index)=>(
                                    <li key={index} className="p2">
                                        {sub}
                                    </li>
                            ))}

                        </ul>

                    </div>
                ))}
            </div>

        </div>
    </section>
  )
}

export default UX