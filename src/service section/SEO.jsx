import { bulletPoint } from '../assets'
import SeoImg from '../assets/SVG/SeoImg'
import { seo, seotxt } from '../constants'
const SEO = () => {
  return (
    <section className="p-px pb-20 md:pb-[100px] lg:pt-10 text-primary-800 pointer-events-none">
        <div className="flex flex-col 3xl:flex-row 3xl:space-x-[60px] 3xl:items-center bg-primary-100 py-10 px-5">
            <div className='flex flex-col gap-y-[35px]'>
              <h1 className='h2-small md:h2 lg:h1 font-semibold'>SEO</h1>
              <p className='p3 md:p2'>{seotxt}</p>
              <div className='flex flex-col gap-y-[9px]'>
                {seo.map((s,index)=>(
                  <div key={index} className='flex items-center space-x-[9px]'>
                    <img src={bulletPoint} alt="bullet point" width={32} height={32} />
                    <p className='p1 font-medium text-primary-700'>{s}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex justify-center md:justify-start items-center md:items-start mt-[60px] 3xl:mt-0'>
              <SeoImg />
            </div>
        </div>
    </section>
  )
}

export default SEO