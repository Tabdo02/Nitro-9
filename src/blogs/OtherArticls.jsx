import { otherArticls } from "../constants"
import OtherArticlsCard from "./OtherArticlsCard"


const OtherArticls = () => {
  return (
    <section className="p-px py-[60px] lg:py-[100px]">
        <h1 className="text-primary-900 h3-small md:h2-small lg:h2 3xl:h1-small font-semibold mb-10 md:mb-20 3xl:text-center">
          Other articles you might be interested
        </h1>
        <div className="flex flex-col gap-y-20 3xl:items-center">
          {otherArticls.map((art)=>(
            <OtherArticlsCard key={art.id} {...art} />
          ))}

        </div>
    </section>
  )
}

export default OtherArticls