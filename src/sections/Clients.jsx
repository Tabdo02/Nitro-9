import { logos1, logos2 } from "../constants"

const Clients = () => {
  return (
    <section className="bg-shades-50 p-px py-20 md:py-[100px] 3xl:py-[140px]">

        <h1 className="text-center h2-small lg:h1-small-tt font-semibold lg:font-normal mb-[60px] md:mb-[140px] pointer-events-none">
          Some of our awesome clients that we are proud to work with
        </h1>

        <div className="w-full flex flex-col justify-center items-center gap-y-[60px] md:gap-y-[100px] overflow-hidden">
          <div className="flex items-center gap-x-11 md:gap-x-[60px]">
              {logos1.map((logo,index)=>(
                <div key={index} className="w-40 md:w-[219px] flex justify-center items-center">
                  <img src={logo} alt="company" className="object-contain" />
                </div>
              ))}
          </div>
          <div className="flex items-center">
            {logos2.map((logo,index)=>(
                  <div key={index} className="w-[188px] md:w-64 flex justify-center items-center">
                    <img src={logo} alt="company" />
                  </div>
                ))}
          </div>
        </div>

    </section>
  )
}

export default Clients