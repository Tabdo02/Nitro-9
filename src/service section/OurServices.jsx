import { ourServices } from "../constants"

const OurServices = () => {
  return (
    <section className="bg-shades-300 p-px py-10 text-primary-700 pointer-events-none">
        <div className="w-full bg-primary-50 pt-10 pb-[60px] px-5 md:p-10 3xl:pt-10 3xl:pb-[60px]">
            <h1 className="h2-small md:h2 lg:h1 font-semibold mb-10">Our Services</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-[40px]">
                    {ourServices.map((s,index)=>(
                        <li key={index}>
                            <h4 className="h4 md:h3">
                                {s}
                            </h4>
                        </li>
                    ))}
                </ul>
        </div>
    </section>
  )
}

export default OurServices