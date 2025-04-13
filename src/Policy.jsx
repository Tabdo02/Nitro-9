import Header from "./sections/Header"
import Footer from "./sections/Footer"
import { policy } from "./assets"
import { policytxt } from "./constants"
import { policy as p } from "./constants"

const Policy = () => {
  return (
    <>
    <Header txtColor="text-primary-600" className="bg-shades-300" />
    <section className="p-px py-10 md:py-[60px] lg:py-[100px] text-primary-800">
        <h1 className="h2-small md:h2 lg:h1-small 3xl:h1 mb-10">Privacy Policy</h1>
        <div className="w-full h-[210px] md:h-[500px] lg:h-[600px] 3xl:h-[858px]">
          <img src={policy} alt="policy" className="object-cover w-full h-full" />
        </div>
        <div className="py-5 flex flex-col gap-y-[60px]">
          <p>Last revised on April 21st, 2021.</p>
          <p className="p3 3xl:p2">{policytxt}</p>
          {p.map(({id,sub,title})=>(
            <div key={id} className="flex flex-col gap-y-5">
              <h3 className="h3 font-semibold mb-5">{title}</h3>
              {
                id !== 3 
                  ?
                  sub.map((s,index)=>(
                  <p key={index} className="p3 3xl:p2">{s}</p>
                          ))
                  :
                  <div className="p3 3xl:p2">
                      <ul className="list-disc pl-5">
                            {sub[0].map((s,index)=>(
                              <li key={index}><p>{s}</p></li>
                            ))}
                      </ul>
                    <p>{sub[1]}</p>
                  </div>
              
              }

            </div>
          ))}
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Policy