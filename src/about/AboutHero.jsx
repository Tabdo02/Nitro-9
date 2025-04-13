import { meettxt } from "../constants"

const AboutHero = () => {
  return (
    <section className="p-px bg-primary-50 py-20 md:py-[100px] flex flex-col space-y-12 pointer-events-none">
        <div>
            <h1 className="h2-small md:h1-small 3xl:d2 font-semibold 3xl:font-bold text-primary-800">Designers, Developers  <br /> and Homo Sapiens.</h1>
        </div>
        <div className="w-full flex 3xl:justify-end 3xl:items-end">   
           <div className="max-w-[907px]">
                <h2 className="h4 md:h3 3xl:h2 text-primary-600 ">{meettxt}</h2>
           </div>
        </div>
    </section>
  )
}

export default AboutHero