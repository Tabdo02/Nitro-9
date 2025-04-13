import FaqCard from "../components/FaqCard"
import { faq } from "../constants"

const Faq = () => {
  return (
    <section className="bg-shades-50 flex flex-col 3xl:flex-row gap-y-[60px] 3xl:gap-y-0 3xl:gap-x-[60px] p-px py-20 md:py-[100px] 3xl:py-[140px]">
      
      <h1 className="h2-small md:h2 lg:h1 font-semibold flex-1">
        Frequently<br/>asked questions
      </h1>

      <div className="flex flex-col gap-y-10">
        {faq.map((f,index)=>(
          <FaqCard key={index} q={f} index={index} />
        ))}
      </div>

    </section>
  )
}

export default Faq