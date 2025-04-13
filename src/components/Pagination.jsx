import Arrow from "../assets/SVG/Arrow"

const Pagination = () => {
  return (
    <div className="flex items-center justify-between md:justify-center gap-x-3">
          <div className="h-[50px] w-[55px] flex justify-center items-center  cursor-pointer">
            <Arrow  />
          </div>
          {Array.from({length:6}).map((_,index)=>(
              <div key={index} className={`h-[50px] w-[55px] max-sm:${index >2  && 'hidden'} flex justify-center items-center ${index === 0 && 'bg-primary-500'} cursor-pointer `}>
                <p className={`p2 font-bold ${index === 0 && 'text-shades-300'}`}>{index+1}</p>
              </div>
          ))}
          <div className="h-[50px] w-[55px] flex justify-center items-center  cursor-pointer">
            <Arrow lr />
          </div>

        </div>
  )
}

export default Pagination