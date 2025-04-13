import { useState } from "react"
import { plus } from "../assets"
import SlideDown from "./SlideDown";

const FaqCard = ({q,index}) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === index;

  return (
    <div>
         <div className="flex justify-between items-center">
            <h3 className="h4 md:h3-small font-semibold flex-1 pointer-events-none">{q}</h3>
            <button className={`flex justify-center items-center h-[60px] w-[60px] ${active ?'bg-primary-600' :'bg-primary-800'} transition-colors duration-500 ease-in-out rounded-full`} onClick={
                ()=>{
                    setActiveId(activeId === index ? null : index)
                }
            }>
                <img src={plus} alt="plus" width={20} height={20} className={`object-contain transition-all duration-500 ${active && 'rotate-45'}`} />
            </button>
         </div>   
        <div className="w-full h-[1px] bg-primary-800 mt-4" />
        <SlideDown active={active}>
        <div className="mt-5">
          <p className="p3 font-medium pointer-events-none">
            Our target customers and companies mostly start-ups, small
            businesses, non-profits, and enterprise clients across the
            industries.
          </p>
        </div>
      </SlideDown>
    </div>
  )
}

export default FaqCard