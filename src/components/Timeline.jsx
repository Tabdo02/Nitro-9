const Timeline = ({id,title,sptitle,subtitle=""}) => {
  return (
    <div className="flex">
              <div className="hidden lg:flex justify-end lg:mr-10 w-80 ">
                {sptitle ?
                (<div className="flex flex-col">
                  {
                    sptitle.map((sp,index)=>(
                      (<h2 className="h2-medium font-semibold" key={index} dir="rtl">{sp}</h2>)
                      ))
                  }
                </div>)
                :
                (<h2 className="h2-medium font-semibold" dir="rtl">{title}</h2>)
                }
                
              </div>
              <div key={id} className="flex">
                
                <div className="mr-3 md:mr-5 lg:mr-10 flex flex-col justify-center items-center">
                  <div className={`h-5 w-5 rounded-full bg-primary-200 ${id === 1 ?'lg:bg-neutral-100':'lg:bg-primary-600'} border-[3px] border-shades-300 ${id === 1 ?'lg:border-neutral-300':'lg:border-primary-300'} `}/>
                  <div className="h-full w-1 bg-primary-700  flex-1"/>
                </div>

                <div className={`${id !== 8 && 'mb-[60px]'} py-7 md:py-10 px-5 md:px-8 lg:p-8 lg:w-[443px] bg-primary-600 ${id===1 && 'lg:bg-primary-900'}`}>
                  <h2 className="mb-4 md:mb-6 h3 md:h2-small font-semibold lg:hidden">{title}</h2>
                  <p className={`p3 md:p1 lg:p2 ${id===1 && 'lg:text-primary-800'}`}>{subtitle}</p>
                </div>

              </div>
    </div>
  )
}

export default Timeline